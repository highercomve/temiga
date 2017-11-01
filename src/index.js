import 'document-register-element'

class TemigaError extends Error {
  constructor (message, code) {
    super(message)
    this.code = code
  }
}

function isRequired (message) {
  throw new TemigaError(message)
}

function throwIsMissing (val, message) {
  return (!val) ? isRequired(message) : val
}

function throwIsNotTypeOf (val, option) {
  if (typeof val !== option.typeOf) { // eslint-disable-line
    throw new TemigaError(`${option.name} must be type of ${option.typeOf}`)
  }
}

function validate (object, toValidate = []) {
  return toValidate.forEach((option) => {
    if (typeof option === 'object') {
      throwIsMissing(object[option.name], `${option.name} is required`)
      if (!option.typeOf) { throwIsNotTypeOf(object[option.name], option) }
    } else {
      throwIsMissing(object[option], `${option} is required`)
    }
  })
}

function setEventListener (type, selector, cb) {
  document.body.addEventListener(type, function () {
    if (event.target && event.target.matches(selector)) {
      cb(...arguments)
    }
  })
}

function clone (obj, list = [], include = true) {
  return Object.keys(obj).reduce((result, key) => {
    if (list.includes(key) === include) {
      result[key] = obj[key]
    }
    return result
  }, {})
}

function update () {
  if (this.shouldUpdate) {
    const newNode = document.createElement('div')
    newNode.innerHTML = this.render.apply(this, arguments)
    console.log(this.firstChild)
    updateElement(this, this.firstChild, newNode)
  } else {
    return this
  }
}

function areEqual (node1, node2) {
  return node1.isEqualNode(node2)
}

function updateElement (parentNode, oldNode, newNode, index = 0) {
  const newLength = (newNode && newNode.children) ? newNode.children.length : 0
  const oldLength = (oldNode && oldNode.children) ? oldNode.children.length : 0
  const elementsAreParent = newLength > 0 || oldLength > 0

  if (oldNode && newNode & areEqual(oldNode, newNode)) {
    return
  }

  parentNode = (parentNode.nodeType === 3) ? parentNode.parentNode : parentNode
  if (!oldNode && newNode) {
    parentNode.appendChild(newNode)
  } else if (elementsAreParent) {
    for (let i = 0; i < newLength || i < oldLength; i++) {
      const parent = oldNode.parentNode || parentNode
      updateElement(
        parent.childNodes[index],
        oldNode.childNodes[i],
        newNode.childNodes[i],
        i
      )
    }
  } else if (oldNode && newNode) {
    parentNode.replaceChild(newNode, oldNode)
  } else if (!newNode) {
    parentNode.removeChild(parentNode.childNodes[index])
  } else {
    console.log(oldNode)
    console.log(newNode)
  }
}

export function CreateElement (builder = isRequired('You need to pass and object')) {
  validate(builder, ['name'])

  const element = CreateTag(builder)
  const eventList = Object.keys(builder.events || {})
  eventList.forEach((key) => {
    const listeners = key.split(',')
    listeners.forEach((listener) => {
      const [type, selector] = listener.split(' ')
      setEventListener(type, selector, builder.events[key])
    })
  })
  return element
}

export function CreateTag (options = {}) {
  const logThis = function (type) {
    return function () {
      console.log(`call on ${type}`)
      console.log(arguments)
      console.log(this)
    }
  }
  const onCreated = options.onCreated || logThis('onCreated')
  const onMounted = options.onMounted || logThis('onMounted')
  const onUnmounted = options.onUnmounted || logThis('onUnmounted')
  const onChange = options.onChange || logThis('onChange')
  const shouldUpdate = options.shouldUpdate || function () { return true }
  const newOptions = {
    createdCallback: {value: onCreated},
    attachedCallback: {value: function () {
      this.update()
      onMounted.call(this)
    }},
    detachedCallback: {value: onUnmounted},
    attributeChangedCallback: {value: onChange}
  }
  const base = Object.create(HTMLElement.prototype, newOptions)

  const elemMethods = clone(options, ['name', 'onCreated', 'onMounted', 'onUnmounted', 'onChange', 'events'], false)

  Object.assign(base, elemMethods, {update, shouldUpdate})

  if (options.props) {
    newOptions.props = options.props
  }

  return document.registerElement(
    options.name,
    {
      prototype: base
    }
  )
}

export function render (root, render) {
  if (typeof render === 'string') {
    root.innerHTML = render
  } else {
    root.appendChild(render)
  }
}
