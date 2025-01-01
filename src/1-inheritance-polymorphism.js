class Phone {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
    this.contacts = [];
  }

  
  addContact(contact) {
    if (!contact.name || !contact.phoneNumber || contact.phoneNumber.length !== 10) {
      return 'Invalid';
    }
    this.contacts.push(contact);
    return `${contact.name} added.`;
  }
  

  makeCall(callContact) { 
    const validContact = this.contacts.find(({ name, phoneNumber }) => name === callContact || phoneNumber === callContact); 
    if (validContact) {
      return `Calling ${validContact.name}...`;
    } else if (callContact.length === 10) {
      return `Calling ${callContact}...`;
    } else {
      return 'Invalid';
    }
  }


  removeContact(name) {
    const index = this.contacts.findIndex(contact => contact.name === name);
    if (index === -1) {
      return 'Contact not found.';
    }
    this.contacts.splice(index, 1);
    return `${name} removed.`;
  }
}

class AppleIPhone extends Phone {
  constructor(phoneNumber, model) {
    super(phoneNumber);  
    this.model = model;
  }

  sendIMessage(contact, message) {
    if (contact instanceof AppleIPhone) {
      return `Message: ${message} - sent from ${this.model}`;
    }
    return 'Message could not be sent.';
  }
}




module.exports = {
  Phone,
  AppleIPhone,
};
