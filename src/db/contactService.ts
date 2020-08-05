import Realm from 'realm';
import {ContactModel} from '../model/ContactModel';

let repository = new Realm({
  schema: [
    {
      name: 'Contacts',
      primaryKey: 'userId',
      properties: {
        userId: {type: 'string', indexed: true},
        firstName: 'string',
        lastName: 'string',
        phoneNumber: 'string',
        email: 'string',
        imageUri: 'string',
      },
    },
  ],
});

const ContactService = {
  findAll: function (): Realm.Results<ContactModel> {
    return repository.objects('Contacts');
  },

  save: function (contact: ContactModel) {
    repository.write(() => {
      repository.create('Contacts', contact);
    });
  },
  update: function (callback: () => void) {
    repository.write(() => {
      callback();
    });
  },
};

export default ContactService;
