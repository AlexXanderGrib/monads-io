# About Memory Usage

At the start of the project i tried to pick the most memory efficient way
to contain type (enum variant) and its value.

I made 4 optimizations, based on `Maybe` type:

1. [`Plain object`](./1-object.js)
   ```javascript
   const just = (value) => ({ type: "just", value });
   const none = { type: "none" };
   ```
2. [`Frozen object`](./2-frozen.js)
   Frozen object, can't be modified, that provides a VM ability to make optimizations
   ```javascript
   const just = (value) => Object.freeze({ type: "just", value });
   const none = Object.freeze({ type: "none" });
   ```
3. [`Classes`](./3-class.js) - 34 KB average  
   Classes, thou not in "functional style", shown a significant decrease in memory usage (2x)

   ```javascript
   class Just {
     static create(value) {
       return new Just(value);
     }

     type = "just";
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

     type = "none";
     constructor() {
       Object.freeze(this);
     }
   }
   ```

4. [`Efficient tag`](./4-enum.js) - 34 KB average  
   The last step should reduce `4 byte` constant string to `1 byte` int.

   ```javascript
   const MaybeState = Object.freeze({
    Just: 1,
    None: 0
   });

   class Just {
    ...
    type = MaybeState.Just
    ...
   }

   class None {
    ...
    type = MaybeState.None
    ...
   }
   ```

## Calculations
