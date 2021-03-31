class Pokemon {
  static plant = "plant";
  static water = "plant";
  static fire = "fire";

  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  attack() {
    return this.type;
  }
}

class PlantPokemon extends Pokemon {
  constructor(name, type) {
    super(name, type);
  }
  resistance(attack) {
    return attack === "fire" ? "You loose" : "you win";
  }
}

class FirePokemon extends Pokemon {
  constructor(name, type) {
    super(name, type);
  }
  resistance(attack) {
    return attack === "water" ? "You loose" : "you win";
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, type) {
    super(name, type);
  }
  resistance(attack) {
    return attack === "plant" ? "You loose" : "you win";
  }
}

//

class Cuenta {
  constructor(money) {
    this.money = money;
    this.openClose = true;
  }
  deposit(money) {
    if (this.openClose) {
      this.money += money;
      return console.log(`Metes ${money}, tienes ${this.money} en la cuenta`);
    }
    return "La cuenta esta cerrada";
  }
  withdraw(money) {
    if (this.openClose) {
      this.money -= money;
      return console.log(
        `Sacas ${money}, te quedan ${this.money} en la cuenta`
      );
    }
    return "La cuenta esta cerrada";
  }
  close() {
    if (this.openClose) {
      this.withdraw(this.money);
      this.open = false;
      console.log("Cuenta cerrada");
    }
  }
  open(money) {
    if (!this.openClose) {
      this.openClose = true;
      this.deposit(money);
      console.log("La cuenta se a reabrido!");
    } else {
        console.log("La cuenta ya esta abierta")
    }
  }
}
