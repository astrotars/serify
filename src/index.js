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
			const response = await this.fetch.post('Verifications', {
				phone: `+${country ? country : '1'}${phone}`,
			});

			return { code: response.status, data: response.data.status };
		} catch (error) {
			return new Error(JSON.stringify(error));
		}
	}

	async verify({ phone, code, country }) {
		try {
			const response = await this.fetch.post('VerificationCheck', {
				phone: `+${country ? country : '1'}${phone}`,
				code,
			});

			return { code: response.status, data: response.data.status };
		} catch (error) {
			return new Error(JSON.stringify(error));
		}
	}
}
