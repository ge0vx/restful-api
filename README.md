## Description
NestJs API test
## Installation

# Requiriments
- Node v16.13.1 (npm v8.1.2)
- Docker v20.10.17

you can also install nest globally to run in a local enviroment
- mest v9.1.3
# Start Commans to initialize docker containers
1. Builds, (re)creates, starts, attaches to containers for a service.
`docker-compose up -d`

2. Visit http://localhost:3000/documentation/ to see Swagger Documentation.

3. Use the next cityId to insert a valid city when creating a user: 
```
1f914780-3892-11ed-a261-0242ac120002
```

For instace you can add the following JSON object within the body of users Post Method (http://localhost:3000/documentation/#/users/UsersController_create):

```
{
    "username": "gio",
    "password": "1234",
    "name": "giovany",
    "address": "main street",
    "cityId": "1f914780-3892-11ed-a261-0242ac120002"
}
```
4. Use auth Post Method to login given an username and password in JSON object format (http://localhost:3000/documentation/#/auth/AuthController_loginUser).

5. You copy and paste the authorization bearer Value in Swagger to use to retrieve user's profile data. (Copy and paste in the Authorize botton).

6. Use http://localhost:3000/documentation/#/users/UsersController_findOne after being authorized and place an userId as parameter.

## License

Nest is [MIT licensed](LICENSE).