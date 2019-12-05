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
  } // async get(path, params) {
  // 	const { status, data } = await this.fetch.get(path, {
  // 		to: `${params.countryCode}${params.phone}`,
  // 	});
  // 	return { status, data };
  // }


  async post(payload) {
    const {
      status,
      data
    } = await this.fetch.request({
      method: 'POST',
      url: 'Verifications',
      data: _querystring.default.stringify({
        To: payload.phone,
        Channel: 'sms'
      })
    });
    return {
      status,
      data
    };
  }

}

exports.default = Fetch;