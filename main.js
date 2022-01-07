class client {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  validateName(name) {
    if (this.name.length < 2) {
      return "debe ser mayor";
    } else {
      let myRegex = /[^0-9^!@#$%^&*()_+{}":?><|]/gi;
      return this.name.match(myRegex);
    }
    // const word = "i"`The word "${word}" ${
    //   sentence.includes(word) ? "is" : "is not"
    // } in the sentence`;
  }
}

const nombre = new client("34#j");
console.log(nombre.validateName());
