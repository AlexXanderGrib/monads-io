import { benchmark } from "./common.js";

const none = Object.freeze({ _type: "none" });
const just = (value) => Object.freeze({ _type: "just", value });

benchmark({ name: "frozen", just, none });
