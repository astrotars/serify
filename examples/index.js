import Serify from '../dist';

const auth = new Serify({
	twilioServiceSid: 'YOUR_TWILIO_SERVICE_SID', // found in the twilio console
	twilioAccountSid: 'YOUR_TWILIO_ACCOUNT_SID', // found in the twilio console
	twilioAuthToken: 'YOUR_TWILIO_AUTH_TOKEN', // found in the twilio console
});

const start = async () => {
	try {
		const start = await auth.start({
			phone: 'USER_PHONE_NUMBER', // users phone number in E.164 format
			country: 'USA', // ISO-3166 alpha 3 format (e.g. USA, CAN, etc.)
		});

		console.log(start);
	} catch (error) {
		console.log(error);
	}
};

start();

const verify = async () => {
	try {
		const verify = await auth.verify({
			phone: 'USER_PHONE_NUMBER', // users phone number E.164 format
			country: 'USA', // ISO-3166 alpha 3 format (e.g. USA, CAN, etc.)
			code: '0000', // length is configurable via the twilio console
		});

		console.log(verify);
	} catch (error) {
		console.log(error);
	}
};

verify();
