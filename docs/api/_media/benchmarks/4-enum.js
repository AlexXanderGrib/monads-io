import { benchmark } from "./common.js";

const Type = Object.freeze({
  None: 0,
  Just: 1
});

class Just {
  static create(value) {
    return new Just(value);
  }

  type = Type.Just;

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

  type = Type.None;
  constructor() {
    Object.freeze(this);
  }
}

benchmark({ name: "enum", just: Just.create, none: None.instance });
