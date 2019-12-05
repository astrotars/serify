import Serify from '../dist';

const auth = new Serify({
	twilioServiceSid: 'YOUR_TWILIO_SERVICE_SID',
	twilioAccountSid: 'YOUR_TWILIO_ACCOUNT_SID',
	twilioAuthToken: 'YOUR_TWILIO_AUTH_TOKEN',
});

const check = async () => {
	try {
		const check = await auth.start({
			phone: 'USER_PHONE_NUMBER',
			country: 1,
		});

		console.log(check);
	} catch (error) {
		console.log(error);
	}
};

check();
