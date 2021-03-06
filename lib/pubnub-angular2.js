'use strict';

var _pubnubCommon = require('./pubnub-common');

var _pubnubCommon2 = _interopRequireDefault(_pubnubCommon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PubNubAngular = function (_PubNubCommon) {
  _inherits(PubNubAngular, _PubNubCommon);

  function PubNubAngular() {
    _classCallCheck(this, PubNubAngular);

    return _possibleConstructorReturn(this, (PubNubAngular.__proto__ || Object.getPrototypeOf(PubNubAngular)).call(this, undefined));
  }

  return PubNubAngular;
}(_pubnubCommon2.default);

module.exports = PubNubAngular;

module.exports.PubNubAngular = PubNubAngular;
//# sourceMappingURL=pubnub-angular2.js.map
