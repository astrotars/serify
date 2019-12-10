import Serify from '../dist';

const auth = new Serify({
	twilioServiceSid: 'YOUR_TWILIO_SERVICE_SID',
	twilioAccountSid: 'YOUR_TWILIO_ACCOUNT_SID',
	twilioAuthToken: 'YOUR_TWILIO_AUTH_TOKEN',
});

const start = async () => {
	try {
		const start = await auth.start({
			phone: 'USER_PHONE_NUMBER',
			country: 1,
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
			phone: 'USER_PHONE_NUMBER',
			country: 1,
			code: '1990',
		});

		console.log(verify);
	} catch (error) {
		console.log(error);
	}
};

verify();
