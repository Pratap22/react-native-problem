export class ContactModel {
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    imageUri?: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.imageUri = imageUri;
  }
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  imageUri?: string;
}
