Node JS practice 2:
-Mockup social media app.

Description:
This was created in order to practice Node JS Rest API creation.

Endpoints:
    User:
        -Create new user:
            -Endpoint:
                http://localhost:3000/api/v1/user/register
            -Body:
                {
                    "userName":"test1",
                    "password":"admin",
                    "email":"admin@gmail.com",
                    "name":"testName",
                    "lastName":"testLastName"
                }

        -Login:
            -Endpoint:
                http://localhost:3000/api/v1/user/login
            -Body:
                {
                    "email":"admin@gmail.com",
                    "password":"admin"
                }
        
        - Current loged user info:
            -Endpoint:
                http://localhost:3000/api/v1/user
            -Auth: Required key

    Posts:
        -Create new post:
            -Endpoint:
                http://localhost:3000/api/v1/post/createPost
            -Auth: Required Key
            -Body:
                {
                    "title":"test post for second user!",
                    "body":"Post created for the second user"
                }
        
        -Get posts from logged user:
            -Endpoint:
                http://localhost:3000/api/v1/post/
            -Auth: Required key


