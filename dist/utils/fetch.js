"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _querystring = _interopRequireDefault(require("querystring"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Fetch {
  constructor({
    twilioServiceSid,
    twilioAccountSid,
    twilioAuthToken
  }) {
    const fetch = _axios.default.create({
      baseURL: `https://verify.twilio.com/v2/Services/${twilioServiceSid}/`,
      auth: {
        username: twilioAccountSid,
        password: twilioAuthToken
      }
    });

    this.fetch = fetch;
  }

  async post({
    path,
    payload
  }) {
    try {
      const obj = {
        To: payload.phone,
        Channel: 'sms'
      };

      if ('code' in payload) {
        obj['Code'] = payload.code;
      }

      const {
        status,
        data
      } = await this.fetch.request({
        method: 'POST',
        url: path,
        data: _querystring.default.stringify(obj)
      });
      return {
        status,
        data
      };
    } catch (error) {
      return error;
    }
  }

}

exports.default = Fetch;