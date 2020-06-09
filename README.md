# auth-server

n this phase, the new requirement is that any user with a valid token (retrieved from either Basic Authentication or OAuth) is able to use that token to login to the system and potentially access protected routes

### Author: Osama Mousa
### Links and Resources

- [submission PR class-12](https://github.com/401-advanced-javascript-osama/auth-server/pull/3)


### Modules
#### `Node.js` 
### Packages
#### `express` , `bcryptjs` , `dotenv` , `jsonwebtoken` , `mongoose` , `morgan` 

#### How to initialize/run your application

- sign up then copy the token after that chose the bearer authorization from the header and past it thier then send you will get the user info


#### Tests

- check mongoose database to see the record

#### UML

![UML-Diagram](./uml/bearer-token.png)
