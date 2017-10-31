'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.CreateElement = CreateElement;
exports.CreateTag = CreateTag;
exports.render = render;

require('document-register-element');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TemigaError = function (_Error) {
  _inherits(TemigaError, _Error);

  function TemigaError(message, code) {
    _classCallCheck(this, TemigaError);

    var _this = _possibleConstructorReturn(this, (TemigaError.__proto__ || Object.getPrototypeOf(TemigaError)).call(this, message));

    _this.code = code;
    return _this;
  }

  return TemigaError;
}(Error);

function isRequired(message) {
  throw new TemigaError(message);
}

function throwIsMissing(val, message) {
  return !val ? isRequired(message) : val;
}

function throwIsNotTypeOf(val, option) {
  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== option.typeOf) {
    // eslint-disable-line
    throw new TemigaError(option.name + ' must be type of ' + option.typeOf);
  }
}

function validate(object) {
  var toValidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return toValidate.forEach(function (option) {
    if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
      throwIsMissing(object[option.name], option.name + ' is required');
      if (!option.typeOf) {
        throwIsNotTypeOf(object[option.name], option);
      }
    } else {
      throwIsMissing(object[option], option + ' is required');
    }
  });
}

function setEventListener(type, selector, cb) {
  document.body.addEventListener(type, function () {
    if (event.target && event.target.matches(selector)) {
      cb.apply(undefined, arguments);
    }
  });
}

function CreateElement() {
  var builder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : isRequired('You need to pass and object');

  validate(builder, ['name']);

  var element = CreateTag(builder);
  var eventList = builder.events || [];
  eventList.forEach(function (eventListener) {
    validate(eventListener, ['type', 'selector', { name: 'cb', typeOf: 'function' }]);
    setEventListener(eventListener.type, eventListener.selector, eventListener.cb);
  });

  return element;
}

function CreateTag() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var logThis = function logThis(type) {
    return function () {
      console.log('call on ' + type);
      console.log(arguments);
      console.log(this);
    };
  };
  var onCreated = options.onCreated || logThis('onCreated');
  var onMounted = options.onMounted || logThis('onMounted');
  var onUnmounted = options.onUnmounted || logThis('onUnmounted');
  var onChange = options.onChange || logThis('onChange');
  var newOptions = {
    createdCallback: { value: onCreated },
    attachedCallback: { value: onMounted },
    detachedCallback: { value: onUnmounted },
    attributeChangedCallback: { value: onChange }
  };

  if (options.props) {
    newOptions.props = options.props;
  }
  return document.registerElement(options.name, {
    prototype: Object.create(HTMLElement.prototype, newOptions)
  });
}

function render(root, render) {
  if (typeof render === 'string') {
    root.innerHTML = render;
  } else {
    root.appendChild(render);
  }
}