// tiene que tener contactos favoritos
// y tiene que poderse añadir mas
class conctactList {
  constructor() {
    this._list = {};
    this.favs = [];
  }
  gerenateConctact() {}
  search() {}
  // buscar constactos por  -Nombre   -Apellido;   -Teléfono;  -Email;
}

class contact {
  constructor(name, surname, phones, email = [null], image) {
    this.id = this.genId();
    this.name = name;
    this.surname = surname;
    this.phones = [{}];
  }
  genId() {}
}
class Phone {
  static tagTypes = { MOVIL: movil };
  constructor()
}
// id: String,  no se puede atualizar nunca
// se pueden ayadir nuebos num cob sus tipos
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
