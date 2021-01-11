# Deploying serverless rest api with Node, AWS Lambda, RDS for Mysql and API Gateway

Repository for exam purposes

- database.js file: configuration file to setup the connection to database
- handler.js file: contains all the functions required
- serverless.yml file: specifications for documentation and application

 ### Tools Documentation
 - [Serverless]: Serverless Framework
 - [Node]: Node JS
 - [AWS Lambda]: Lambda Functions
 - [RDS MySQL]: RDS for MySQL
 - [API Gateway]: API Gateway
 
[Serverless]: <https://www.serverless.com/framework/docs/>
[Node]: <https://nodejs.org/es/docs/>
[AWS Lambda]: <https://aws.amazon.com/es/lambda/>
[RDS MySQL]: <https://aws.amazon.com/es/rds/mysql/>
[API Gateway]: <https://aws.amazon.com/es/api-gateway/>
 
### Steps to Replicate
- Configure an IAM User in AWS Managment Console with the following permissions:
    * AmazonRDSFullAccess
    * AWSLambdaFullAccess
    * IAMFullAccess
    * AmazonAPIGatewayAdministrator
    
- Go to the terminal and enter the following command:
```sh
$ serverless config credentials --provider aws --key <your_access_key> --secret <your_secret_key>
```
- Setup a MySQL database in RDS service on AWS Console, in localhost, you can put directly the params in database.js file 
- Recreate the schema and the structure of the table to support the operations (setupSchema.sql file)
- To deploy the project into your AWS account, go to the terminal and enter the following command:
```sh
$ serverless deploy
```

### Exposed endpoints
- /dev/starwars/getMoviesAPI
    * Fetch all the movies in StarWars API 
- /dev/starwars/getAllMovies
    * Get all the movies in the database
- /dev/starwars/getMovie/{id_episodio}
    * Get a specific movie in the database
- /dev/starwars/createMovie
    * Send a request with all the necessary fields to register a new movie

### Run Unit Tests
- Go to the terminal and enter the following command:
```sh
$ yarn test
```