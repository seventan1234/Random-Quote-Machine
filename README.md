# Random-Quote-Machine
[FreeCodeCamp][^1]'s project #1 of "Front End Development Libraries".

**TODO:**

- [ ] Add summary on README.md after project completed.
- [ ] Add Tweet button on quote machine

## Initial Setup: Local Development Environment

**#1 Create My React App**

```bash
# import template
npx create-react-app my-app

# clear css and js file under directory "src"
rm -f my-app/src/*
```

**#2 Places `index.css` & `index.js` files under `my-app/src/`**

```bash
# Under my-app
cd src
touch index.css 
vim index.js
```

Add these 3 lines on `index.js`

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
```

## Live Preview

```bash
# Under directory "my-app"
npm start
```
**On browser address bar:**

```url
http://localhost:3000
```

# References

- [FreeCodeCamp Project: Random Quote Machine](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine)
- [Create React App Docs](https://create-react-app.dev/docs/documentation-intro)
- [Create React App Tutorial](https://reactjs.org/tutorial/tutorial.html#before-we-start-the-tutorial)

---

[^1]: https://www.freecodecamp.org/learn/	"A friendly community where you can learn for free"

