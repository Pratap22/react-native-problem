const regexOnlyCharacters = /^[a-zA-Z ]+$/;
const regexEmail = /^(([^<>()#[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,12}))$/;
const regexOnlyNumber = /^[0-9]+$/;

interface OutputProps {
  isValid: boolean;
  fieldErrors: Map<string, string>;
}

class CommonUtils {
  static getRandomColor(): string {
    return (
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')'
    );
  }

  static validateInputs(
    firstName: string,
    phoneNumber: string,
    email: string,
  ): OutputProps {
    let isValid = true;
    let fieldErrors = new Map();
    if (firstName === '') {
      isValid = false;
      fieldErrors.set('firstName', 'FirstName cannot be empty');
    }

    if (!regexEmail.test(email)) {
      isValid = false;
      fieldErrors.set('email', 'Please enter a valid email');
    }

    if (!regexOnlyNumber.test(phoneNumber)) {
      isValid = false;
      fieldErrors.set('phoneNumber', 'Please enter a valid mobile number');
    }

    return {isValid, fieldErrors};
  }
}

export default CommonUtils;
