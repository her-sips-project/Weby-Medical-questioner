const emailValidator =  require("deep-email-validator");

    async function isEmailValid(email: string) {
    return emailValidator.validate(email);
    }

    export default isEmailValid