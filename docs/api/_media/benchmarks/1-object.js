import { benchmark } from "./common.js";

const none = { _type: "none" };
const just = (value) => ({ _type: "just", value });

benchmark({ name: "object", just, none });
