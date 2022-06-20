# Image Processing API
### Project #1 - Full Stack Development Nanodegree by Udacity
Image processing API, uses query parameters to serve resize images.
In order to get an image you need to provide the imageName, and also the wanted width **and** height via url query parameters. 
If one param is missing, you get an information about the missing parameter.

### An image processing API that resizes and saves images to user specifications when visiting a URL.
  * Configure Prettier and ESLint with Typescript. 
  * Resize an image in Node.js using Sharp.
  * Tests for endpoints and image processing.
  * Handle errors when an image has failed to process or does not exist. 

Techs: `Typescript` `Nodejs` `Jasmine`


## NODEJS SETUP
```bash
# Type in your terminal too create package.json
 npm init
```
## PRETTIER & ESLINT SETUP
```bash
# Type in your terminal to install those packages as dev-dependences
npm i --save-dev prettier
npm i --save-dev eslint
npm i --save-dev eslint-config-prettier
npm i --save-dev eslint-plugin-prettier
npm i --save-dev @typescript-eslint/eslint-plugin
npm i --save-dev @typescript-eslint/parser

```
## PRETTIER & ESLINT CONFIGURATION
```bash
# Type in package.json under scripts
"lint": "eslint src/*.ts ",
"lint:f": "eslint src/*.ts --fix",
"prettier": "prettier --config .prettierrc 'src/**/*.ts' --write",
```

## TYPESCRIPT SETUP
```bash
 npm i typescript --save-dev
 npm i ts-node --save-dev 
"scripts": {
    "build": "tsc"
  },
```

## JASMINE SETUP
```bash
# For unit testing 
 npm i --save-dev jasmine 
 npm i --save-dev jasmine-spec-reporter 
npm i --save-dev @types/jasmine 
 # in Package.json 
"scripts": {
   "jasmine": "jasmine",
   "test": "npm run build && npm run jasmine",
  },
 # create jasmine.json file and configure it 
```
## ENDPOINT TESTING SETUP
```bash
# import SuperTest in the spec file.
npm i --save-dev supertest  
npm i --save-dev @types/supertest.  
```

## SERVER SETUP
```bash
npm i express  
npm i --save-dev @types/express  
npm i --save-dev nodemon  
"scripts": {
    "start": "nodemon src/index.ts",
  },
  #start your server
```
## FOR IMAGE RESIZING 
```bash
npm i sharp  
npm i --save-dev @types/sharp 
```
## ENDPOINT API
#### API path
`/images`

#### Query Parameters
Parameters are added to the url. First parameter is added by question mark `?` followed by the name of the parameter followed by the equal sign `=` and the value.
Any other parameter then is added by an ampersand `&`.

Example Url with parameters:
`http://localhost:3000/images?imageName=encenadaport&width=200&height=100`

### Available parameters

| Parameters |  |  |
| ------------------ | ------------------ |  ------------------ |
| imageName | any image name listed below | required|
| width | set any image width | optional |
| height | set any image height | optional |

### Available imageName
- encenadaport
- fjord
- icelandwaterfall
- palmtunnel
- santamonica

