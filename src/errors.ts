enum DeserializationErrorMessages {
  EXPECTED_MAYBE = "Expected serialized to be of type Maybe",
  EXPECTED_EITHER = "Expected serialized to be of type Either",
  EITHER_INVALID_STATE = "Unable to deserialize Either: Invalid state"
}

Object.freeze(DeserializationErrorMessages);

export class DeserializationError extends Error {
  static readonly Messages = DeserializationErrorMessages;
  override name = "DeserializationError";

  constructor(message: DeserializationErrorMessages) {
    super(message);
  }
}

enum DecorationErrorMessages {
  EXPECTED_DECORATING_METHOD = "Expected decorating method"
}

Object.freeze(DecorationErrorMessages);

/* istanbul ignore next */
export class DecorationError extends Error {
  static readonly Messages = DecorationErrorMessages;
  override name = "DecorationError";

  constructor(message = DecorationError.Messages.EXPECTED_DECORATING_METHOD) {
    super(message);
  }
}

enum InvalidStateMessages {
  INVALID_STATE = "Invalid state",
  APPLY_SHOULD_BE_FUNCTION = "Some of the arguments should be a function"
}

Object.freeze(InvalidStateMessages);

export class InvalidStateError extends Error {
  static readonly Messages = InvalidStateMessages;
  override name = "InvalidStateError";

  constructor(message = InvalidStateMessages.INVALID_STATE) {
    super(message);
  }
}

enum UnwrapCustomErrorMessages {
  EITHER_IS_LEFT = "Either state is Left",
  MAYBE_IS_NONE = "Maybe state is None"
}

Object.freeze(UnwrapCustomErrorMessages);

export class UnwrapCustomError extends Error {
  static readonly Messages = UnwrapCustomErrorMessages;
  override name = "UnwrapCustomError";

  static inlineThrow(message: string): never {
    throw new UnwrapCustomError(message);
  }

  constructor(message: string) {
    super(message);
  }
}

enum MatchErrorMessages {
  CASE_NOT_HANDLED = "Match should handle all available cases"
}

export class MatchError extends Error {
  static readonly Messages = MatchErrorMessages;

  constructor(public readonly missingCases: string[]) {
    super(MatchErrorMessages.CASE_NOT_HANDLED);
  }
}
