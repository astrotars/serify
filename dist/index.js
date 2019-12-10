"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
      const response = await this.fetch.post({
        path: 'Verifications',
        payload: {
          phone: `+${country ? country : '1'}${phone}`
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
      const response = await this.fetch.post({
        path: 'VerificationCheck',
        payload: {
          phone: `+${country ? country : '1'}${phone}`,
          code: code.toString()
        }
      });
      console.log(response);
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