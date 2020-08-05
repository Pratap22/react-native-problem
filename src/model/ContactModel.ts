export class ContactModel {
  constructor(
    userId: string,
    firstName: string = '',
    lastName: string = '',
    phoneNumber: string = '',
    email: string = '',
    imageUri?: string,
  ) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.imageUri = imageUri;
  }
  userId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  imageUri?: string;
}
