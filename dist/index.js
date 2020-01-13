"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _phone = _interopRequireDefault(require("phone"));

var _fetch = _interopRequireDefault(require("./utils/fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Serify {
  constructor({
    twilioServiceSid,
    twilioAccountSid,
    twilioAuthToken
  }) {
    this.fetch = new _fetch.default({
      twilioServiceSid,
      twilioAccountSid,
      twilioAuthToken
    });
    this.twilioAccountSid = twilioAccountSid;
    this.twilioAuthToken = twilioAuthToken;
  }

  async start({
    phone,
    country
  }) {
    try {
      const number = (0, _phone.default)(phone, country ? country : 'USA');

      if (!number) {
        throw new Error('Invalid phone number. Please provide the country code in an ISO-3166 alpha 3 format.');
      }

      const response = await this.fetch.post({
        path: 'Verifications',
        payload: {
          phone: number
        }
      });
      return {
        code: response.status,
        data: 'OK'
      };
    } catch (error) {
      return new Error(error);
    }
  }

  async verify({
    phone,
    country,
    code
  }) {
    try {
      const number = (0, _phone.default)(phone, country ? country : 'USA');

      if (!number) {
        throw new Error('Invalid phone number. Please provide the country code in an ISO-3166 alpha 3 format.');
      }

      if (code.length <= 3) {
        throw new Error('Invalid SMS code.');
      }

      const response = await this.fetch.post({
        path: 'VerificationCheck',
        payload: {
          phone: number,
          code: code.toString()
        }
      });
      return {
        code: response.status,
        data: 'OK'
      };
    } catch (error) {
      return new Error(error);
    }
  }

}

exports.default = Serify;