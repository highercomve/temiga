import 'document-register-element'
import morph from 'nanomorph'

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
  try {
    if (this.shouldUpdate) {
      const html = this.render.apply(this, arguments).trim()
      const newNode = document.createElement('div')
      newNode.innerHTML = html
      if (!this.firstChild || (this.firstChild.nodeType === 3 && this.firstChild.textContent.trim() === '')) {
        this.appendChild(newNode.firstChild)
      } else {
        morph(this.firstChild, newNode.firstChild)
      }
    }
  } catch (e) {
    console.log(e)
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
      if (type === 'onChange') {
        console.log(arguments)
      }
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
