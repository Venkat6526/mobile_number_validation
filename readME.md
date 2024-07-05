// run the below command in terminal
npm install mobile_number_validation

// Use Below Snippets to validate number
const validatePhoneNumber = require('./index');

const result = validatePhoneNumber('+14155552671', 'US');
console.log(result);
// true

