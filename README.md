# Random-Quote-Machine
FreeCodeCamp[^1]'s project #1: "Front End Development Libraries".

## See The Result

```bash
sudo npm install -g serve

# Under my-app/
serve -s build -l 4000
# -l 4000   --listen (port 4000)
```

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
# Under my-app/
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
# Under my-app/
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
- [Bootstrap 4 Cheat Sheet](https://bootstrapcreative.com/resources/bootstrap-4-css-classes-index/)
- [Twitter Button | Web Intent | API](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent)
- [HTML Symbols Charset Character Codes](https://www.rapidtables.com/web/html/html-codes.html)

---

[^1]: https://www.freecodecamp.org/learn/	"A friendly community where you can learn for free"

