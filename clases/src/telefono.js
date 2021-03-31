class ConstactList {
  constructor(contact) {
    this.contact = [contact];
    this.favorites = [];
    if (this.contact != null) {
      this.favorites.push(this.contact[0].id);
    }
  }
  createContact(contact) {
    this.contact.push(contact);
  }
  createFavorite(fav) {
    this.contact.find((x) => x.id === fav).push();
  }
  deleteFavorite(id) {
    this.favorites.find((x) => x.id === fav).push();
  }
}

class Contact {
  constructor(name, surname, phone = null, email = null, image = null) {
    this.id = this.genId();
    this.name = name;
    this.surname = surname;
    this.phones = [];
    this.email = email;
    this.image = image;

    if (phone != null) {
      this.phones.push(phone);
    }
  }
  adPhone(phone) {
    this.phones.push(phone);
  }
  genId() {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
  }
  addEmail(email) {
    this.email.push(email);
  }
  addImage(image) {
    this.images.push(image);
  }
}

class Phone {
  static Type = {
    Movil: "Movil",
    Trabajo: "Trabajo",
    Casa: "Casa",
    Principal: "Principal",
    Otro: "otro",
  };

  constructor(number, tag) {
    this.number = number;
    this.tag = tag;
  }
}
const roger = new ConstactList(
  new Contact("roger", "Sanchez", new Phone("655655655", Phone.Type.Casa))
);

// const p = new Phone("633155222", Phone.types.MOVIL);

// id: String,  no se puede atualizar nunca
// se pueden añadir nuevos num cob sus tipos
// {
//     id: String,  no se puede atualizar nunca
//     name: String,
//     surname: String,
//     phones: [
//       {
//         tag: String || null
//         value: String
//       }
//     ],
//     email: String || null,
//     image: String // una url de imagen
//   }

const genid = () => Math.random(36).toString(36).substring(7);
