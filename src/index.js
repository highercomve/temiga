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

export function CreateElement (builder = isRequired('You need to pass and object')) {
  validate(builder, ['name'])

  const element = CreateTag(builder)
  const eventList = builder.events || []
  eventList.forEach((eventListener) => {
    validate(eventListener, ['type', 'selector', {name: 'cb', typeOf: 'function'}])
    setEventListener(eventListener.type, eventListener.selector, eventListener.cb)
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
  const newOptions = {
    createdCallback: {value: onCreated},
    attachedCallback: {value: onMounted},
    detachedCallback: {value: onUnmounted},
    attributeChangedCallback: {value: onChange}
  }

  if (options.props) {
    newOptions.props = options.props
  }
  return document.registerElement(
    options.name,
    {
      prototype: Object.create(HTMLElement.prototype, newOptions)
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
