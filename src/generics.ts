interface SignupStepOne {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

interface SignupStepTwo {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2: string;
    pincode: string;
    mobile: string;
}

export class Registration <STEP> {
    email: string;
    password: string;
    firstName: string;
    lastName: string;

    public registrationData: STEP;

    collectRegistrationData(data: STEP): void {
        const { email, password, firstName, lastName } = data;
        this.registrationData = {email, password, firstName, lastName, ...data};
    }
}

const registrationStep1 = new Registration<SignupStepOne>();

registrationStep1.collectRegistrationData({
    email: 'test@gmail.com', password:'test@12345', firstName: 'Test', lastName: 'User'});