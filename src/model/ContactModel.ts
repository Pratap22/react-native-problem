export class ContactModel {
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}
