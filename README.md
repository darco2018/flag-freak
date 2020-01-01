# Flag Freak

> Guess the flag of a country.

### Features

- React frontend with fetch API
- The coutries are supplied by REST countries API

### Instalation

```sh
$ npm i
$ npm start
$ # go to http://localhost:3000/
```

### Deploy to Github Pages
  - Create Github repo **flag-freak** with __Settings > Github Pages > Source > gh-pages branch__
  - Set "homepage": "http://[github username].github.io/flag-freak" in **package.json** 
  - Deploy the app to Github Pages:
```sh
 $ npm run build && sudo gh-pages -d build
 ```
