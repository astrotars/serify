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
		try {
			const obj = {
				To: payload.phone,
				Channel: 'sms',
			};

			if ('code' in payload) {
				obj['Code'] = payload.code;
			}

			console.log(obj);

			const { status, data } = await this.fetch.request({
				method: 'POST',
				url: path,
				data: qs.stringify(obj),
			});

			return { status, data };
		} catch (error) {
			return error;
		}
	}
}
