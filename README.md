# disutility
NodeJS/NPM Package for various Discord (bot) utils

Currently provides a fast and easy way to create timestamp messages, but more stuff is coming soon!

# Usage
The package is available on npmjs.org, to install it:
```bash
npm install disutility
``` 
and then just require it in your project! (TypeScript support is now out!)

# Code Example
Below are some useful code examples.

## Timestamp
```js
// Requiring the package
const { Timestamp, TimestampTypes } = require('disutility')

// You can use this timestamp in your Discord bot's message or wherever you need it.
const relativeStamp = Timestamp(TimestampTypes.RELATIVE) 
```

Did you make any projects with this library? Don't hesitate to share with me what you used it for, you can contact me on discord: not_h3 