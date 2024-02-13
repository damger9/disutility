# disutility
NodeJs Package for various Discord (bot) utils

# Usage
The package is available on npmjs.org, to install it:
```bash
npm i disutility
``` 
and then just require it in your project! (TypeScript support is now out!)

# Code Example
```js
// Requiring the package
const { Timestamp, TimestampTypes } = require('disutility')

// You can use this timestamp in your Discord bot's message or wherever you need it.
const relativeStamp = Timestamp(TimestampTypes.RELATIVE) 
```

Working on this - more info coming soon!