class Animal {
  constructor(name) {
    this.name = Animal.capitaliseName(name);
  }
  walk() {
    alert(`Animal ${this.name} is walking`);
  }

  static capitaliseName(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length)
  }
}



let a = new Animal("tiger")
a.walk()