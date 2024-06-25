import { benchmark } from "./common.js";

const Type = Object.freeze({
  None: "None",
  Just: "Just"
});

class Just {
  static create(value) {
    return new Just(value);
  }

  get type() {
    return Type.Just;
  }

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

  get type() {
    return Type.None;
  }

  constructor() {
    Object.freeze(this);
  }
}

benchmark({
  name: "full type name + getter",
  just: Just.create,
  none: None.instance
});
