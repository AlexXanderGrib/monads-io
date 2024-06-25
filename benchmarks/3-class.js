import { benchmark } from "./common.js";

class Just {
  static create(value) {
    return new Just(value);
  }

  type = "_just";

  constructor(value) {
    this.value = value;
    Object.freeze(this);
  }
}

class None {
  static instance = new None();
  static create() {
    return None.instance;
  }

  type = "_none";
  constructor() {
    Object.freeze(this);
  }
}

benchmark({ name: "class", just: Just.create, none: None.instance });
