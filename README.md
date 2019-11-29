# Search Bar

Search bar that allows entering names and searching for common grocery items. Suggests a list of probable items as the user types. Built to learn about searching and generating spelling auto-suggestions.

[https://shielded-springs-83524.herokuapp.com](https://shielded-springs-83524.herokuapp.com)

## Technologies Used
- `Client` - HTML, CSS, JavaScript, Ajax
- `Server` - Node.js, Express

## Requirements for Development
- Git
- Web browser
- NPM
- Heroku CLI (optional for easy deployment)

## Setup and Run
```bash
# 1. Install node dependencies
npm install

# 2. Start the server (runs on port 5000)
npm start

# 3. Open the client http://localhost:5000/
```
[http://localhost:5000/](http://localhost:5000/)

## Automated Testing
```bash
# 1. Run unit testing scripts
npm test
```

## Deploy to heroku
```bash
# 1. Initilize heroku and create remote hosting repository 
heroku create

# 2. Push the current mater branch to heroku and build application
git push heroku master
```

## Authors
Mike Stockman

## References
- [https://norvig.com/spell-correct.html](https://norvig.com/spell-correct.html)