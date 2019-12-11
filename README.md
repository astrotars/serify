![Serify](https://i.imgur.com/HFbmrGa.jpg)

![Dependency Status](https://img.shields.io/david/nparsons08/serify)
![Dependency Size](https://img.shields.io/github/size/nparsons08/serify/dist/index.js)
![Open Issues](https://img.shields.io/github/issues-raw/nparsons08/serify)
![Version](https://img.shields.io/npm/v/serify)

> **Note**: This package is still under heavy development and methods can change at any point in time. Use with caution. Contributors welcome.

[Serify](https://www.npmjs.com/package/serify) is a wrapper around the [Twilio Verify](https://www.twilio.com/verify) [REST API](https://www.twilio.com/docs/verify/api). This lightweight and straightforward wrapper allows you to send and verify SMS codes with two easy to use methods – and it only has two dependencies. Both methods use of async/await, making it easy to integrate into your existing codebase.

## Example

To send a verification code using, use the `start` method as shown below:

```javascript
import Serify from 'serify';

const auth = new Serify({
	twilioServiceSid: 'YOUR_TWILIO_SERVICE_SID', // required (found in the twilio console)
	twilioAccountSid: 'YOUR_TWILIO_ACCOUNT_SID', // required (found in the twilio console)
	twilioAuthToken: 'YOUR_TWILIO_AUTH_TOKEN', // required (found in the twilio console)
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
```

To verify a code, use the `verify` method as shown below:

```javascript
import Serify from 'serify';

const auth = new Serify({
	twilioServiceSid: 'YOUR_TWILIO_SERVICE_SID', // required (found in the twilio console)
	twilioAccountSid: 'YOUR_TWILIO_ACCOUNT_SID', // required (found in the twilio console)
	twilioAuthToken: 'YOUR_TWILIO_AUTH_TOKEN', // required (found in the twilio console)
});

const verify = async () => {
	try {
		const verify = await auth.verify({
			phone: 'USER_PHONE_NUMBER', // users phone number in E.164 format
			country: 'USA', // ISO-3166 alpha 3 format (e.g. USA, CAN, etc.)
			code: '1990', // length is configurable via the twilio console
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
