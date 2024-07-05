// index.js
const { parsePhoneNumberFromString } = require('libphonenumber-js');

function validatePhoneNumber(number, country) {
    const phoneNumber = parsePhoneNumberFromString(number, country);
    if (phoneNumber && phoneNumber.isValid()) {
        return {
            valid: true,
            country: phoneNumber.country,
            formatInternational: phoneNumber.formatInternational(),
            formatNational: phoneNumber.formatNational()
        };
    } else {
        return { valid: false, error: 'Invalid phone number' };
    }
}

module.exports = validatePhoneNumber;
