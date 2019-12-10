import Fetch from './utils/fetch';

export default class Serify {
	constructor({ twilioServiceSid, twilioAccountSid, twilioAuthToken }) {
		this.fetch = new Fetch({
			twilioServiceSid,
			twilioAccountSid,
			twilioAuthToken,
		});

		this.twilioAccountSid = twilioAccountSid;
		this.twilioAuthToken = twilioAuthToken;
	}

	async start({ phone, country }) {
		try {
			const response = await this.fetch.post({
				path: 'Verifications',
				payload: {
					phone: `+${country ? country : '1'}${phone}`,
				},
			});

			return { code: response.status, data: 'OK' };
		} catch (error) {
			return new Error(error);
		}
	}

	async verify({ phone, country, code }) {
		try {
			const response = await this.fetch.post({
				path: 'VerificationCheck',
				payload: {
					phone: `+${country ? country : '1'}${phone}`,
					code: code.toString(),
				},
			});

			console.log(response);

			return { code: response.status, data: 'OK' };
		} catch (error) {
			return new Error(error);
		}
	}
}
