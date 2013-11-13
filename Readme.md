# pick

  Picks keys from an object.

## Installation

    $ component install ivolo/pick
    $ npm install ivolo/pick

## Example

```js
var pick = require('pick');

pick({ a: 1 }, 'a');            // { a: 1 }
pick({ a: 1, b: 2 }, 'a');      // { a: 1 }
pick({ a: 1, b: 2 }, 'a', 'b'); // { a: 1, b: 2 }
pick({ a: 1, b: 2 }, 'b');      // { b: 2 }
pick([], 'a', 'b');             // {}
pick(1, 'a', 'b');              // {}
pick(null, 'a', 'b');           // {}
pick(undefined, 'a', 'b');      // {}
```

## API

### pick(obj, ..)
  
  Pick specific keys from an object.

## License

  MIT
