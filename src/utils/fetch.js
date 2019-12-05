import qs from 'querystring';
import axios from 'axios';

export default class Fetch {
	constructor({ twilioServiceSid, twilioAccountSid, twilioAuthToken }) {
		const fetch = axios.create({
			baseURL: `https://verify.twilio.com/v2/Services/${twilioServiceSid}/`,
			auth: {
				username: twilioAccountSid,
				password: twilioAuthToken,
			},
		});

		this.fetch = fetch;
	}

	async post({ path, payload }) {
		const { status, data } = await this.fetch.request({
			method: 'POST',
			url: path,
			data: qs.stringify({
				To: payload.phone,
				Code: payload.code,
			}),
		});

		return { status, data };
	}
}
