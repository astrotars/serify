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
      const response = await this.fetch.post('Verifications', {
        phone: `+${country ? country : '1'}${phone}`
      });
      return {
        code: response.status,
        data: response.data.status
      };
    } catch (error) {
      return new Error(JSON.stringify(error));
    }
  }

  async verify({
    phone,
    code,
    country
  }) {
    try {
      const response = await this.fetch.post('VerificationCheck', {
        phone: `+${country ? country : '1'}${phone}`,
        code
      });
      return {
        code: response.status,
        data: response.data.status
      };
    } catch (error) {
      return new Error(JSON.stringify(error));
    }
  }

}

exports.default = Serify;