# DevEd ReST API

## Dependency packages

[Express](https://expressjs.com/)

[Mongoose](https://mongoosejs.com/)

[Nodemon](https://www.npmjs.com/package/nodemon)

## Database

MongoDB is used to store the data.

## API Testing

We used [Postman](https://www.postman.com/) to test APIs

## Testing API requests

Run `npm start` to run connect to MongoDB.

try with below requests

Get - http://localhost:3000/posts

Post - http://localhost:3000/posts with below body data in raw JSON format  
        {
            "title":"Fourth Post",
            "description":"This is my fourth post from a Node server to MongoDB"
        }
        
