# What is Monad?

Monad is generic wrapper that allows to manipulate data
in consistent way and prevent redundant work.

## JS Native monads

1. `Promise`
   1. Unwraps returned promises in `.then()` and `.catch()`
   2. Handles errors both sync & async and puts them into `.catch()` callback
2. `Array` - abstracts manipulation over multiple instances of the same data using `.map()` and `.filter()`,
   1. Unwraps nested arrays using `.flat()` and `.flatMap()`

## Implemented here monads

1. `Either`
   1. Allows to define both Result and Error. To prevent redundant work of handling them in Try/Catch
   2. Allows to manipulate both Result (using `.map()`) and Error (using `.mapLeft()`) separately.
   3. Unwraps nested Either's using `.join()` and `.chain()`
   4. Handles nested promises using `.asyncChain()` and `.await()`
2. `Maybe` - allows to define the happy path of your data, not focusing on guarding inputs against undefined and null
   1. Method names are the same
