![Dependency Status](https://img.shields.io/david/nparsons08/serify)
![Dependency Size](https://img.shields.io/github/size/nparsons08/serify/dist/index.js)
![Open Issues](https://img.shields.io/github/issues-raw/nparsons08/serify)
![Version](https://img.shields.io/npm/v/serify)

[Serify](https://www.npmjs.com/package/serify) is a wrapper around the [Twilio Verify](https://www.twilio.com/verify) [REST API](https://www.twilio.com/docs/verify/api). This lightweight and straightforward wrapper allows you to send and verify SMS codes with two easy to use methods – and it only has one dependency. Both methods use of async/await, making it easy to integrate into your existing codebase.

## Example

To send a verification code using, use the `start` method as shown below:

```javascript
import Serify from 'serify';

const auth = new Serify({
	twilioServiceSid: 'YOUR_TWILIO_SERVICE_SID', // required
	twilioAccountSid: 'YOUR_TWILIO_ACCOUNT_SID', // required
	twilioAuthToken: 'YOUR_TWILIO_AUTH_TOKEN', // required
});

const start = async () => {
	try {
		const start = await auth.start({
			phone: 'USER_PHONE_NUMBER', // required
			country: 1, // optional
		});

		console.log(start);
	} catch (error) {
		console.log(error);
	}
};

start();
```

To verify a code, use the `verify` method as shown below:

```javascript
import Serify from 'serify';

const auth = new Serify({
	twilioServiceSid: 'YOUR_TWILIO_SERVICE_SID', // required
	twilioAccountSid: 'YOUR_TWILIO_ACCOUNT_SID', // required
	twilioAuthToken: 'YOUR_TWILIO_AUTH_TOKEN', // required
});

const verify = async () => {
	try {
		const verify = await auth.verify({
			phone: 'USER_PHONE_NUMBER', // required
			country: 1, // optional
			code: 'USER_VERIFICATION_CODE', // required
		});

		console.log(verify);
	} catch (error) {
		console.log(error);
	}
};

verify();
```

## Obtaining Tokens

Twilio can be confusing at times as the API requires an **Account Level SID**, an **Account Auth Token**, in addition to a **Service SID**. All tokens can be found within your [Twilio console](https://www.twilio.com/console).

1. The account level SID and Account Auth Token are provided at the top level of your account.
2. The service specific SID can be found when creating your application for the [Twilio Verify](https://www.twilio.com/verify) product.

[![Beerpay](https://beerpay.io/nparsons08/serify/badge.svg)](https://beerpay.io/nparsons08/serify)
