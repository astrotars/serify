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
        phone: `+${country ? country : '1'}${phone}`
      });
      return {
        code: response.status,
        data: response.data.status
      };
    } catch (error) {
      return new Error(JSON.stringify(error));
    }
  } // async verify({ phone, code, country }) {
  // 	try {
  // 		const response = await this.fetch.post(`${this.baseUrl}/check`, {
  // 			verification_code: code,
  // 			phone_number: phone,
  // 			country_code: country || 1,
  // 		});
  // 		return response;
  // 	} catch (error) {
  // 		return new Error(
  // 			JSON.stringify({
  // 				status: error.response.status,
  // 				message: error.response.data.message,
  // 			})
  // 		);
  // 	}
  // }


}

exports.default = Serify;