import {ContactModel} from '../model/ContactModel';

export let DATA = [
  {
    id: '1',
    firstName: 'Harjinder',
    lastName: 'Singh Lohia',
    phoneNumber: '9123459876',
    email: 'dummy@gmail.com',
  },
  {
    id: '2',
    firstName: 'Pratap',
    lastName: 'Sharma',
    phoneNumber: '8884209127',
    email: 'dummy@gmail.com',
  },
  {
    id: '3',
    firstName: 'Pavan',
    lastName: 'Sharma',
    phoneNumber: '8765432192',
    email: 'dummy@gmail.com',
  },
  {
    id: '4',
    firstName: 'Naveen',
    lastName: 'Sharma',
    phoneNumber: '6567891234',
    email: 'dummy@gmail.com',
  },
  {
    id: '6',
    firstName: 'Suhas',
    lastName: 'Sharma',
    phoneNumber: '7338081313',
    email: 'dummy@gmail.com',
  },
  {
    id: '7',
    firstName: 'Darryl',
    lastName: 'Sharma',
    phoneNumber: '8884209127',
    email: 'dummy@gmail.com',
  },
  {
    id: '8',
    firstName: 'Akhil',
    lastName: 'Sharma',
    phoneNumber: '8884209127',
    email: 'dummy@gmail.com',
  },
  {
    id: '9',
    firstName: 'Viju',
    lastName: 'Sharma',
    phoneNumber: '8884209127',
    email: 'dummy@gmail.com',
  },
];

export const contacts = DATA.map(
  (item) =>
    new ContactModel(
      Number(item.id),
      item.firstName,
      item.lastName,
      item.phoneNumber,
      item.email,
    ),
);

// export function Save(firstName, lastName, number, email) {
//   let randomId = Math.random()
//     .toString(36)
//     .replace(/[^a-z]+/g, '')
//     .substr(2, 10);
//   let NewContactDetails = {
//     id: randomId,
//     firstName: firstName,
//     lastName: lastName,
//     no: number,
//     email: email,
//   };
//   DATA.push(NewContactDetails);
//   console.log(DATA);
//   alert('Successfully Added Contact');
// }

// export function Update(Id, firstName, lastName, number, email) {
//   DATA.map((item, index) => {
//     if (item.id === Id) {
//       item.firstName = firstName;
//       item.lastName = lastName;
//       item.no = number;
//       item.email = email;
//     }
//   });
//   console.log(DATA);
//   alert('Successfully Updated Contact');
// }
