# Rapid Ride - A Bicycle Store

## Project Overview

The Bicycle Store Application is a responsive web application designed to provide users with a seamless experience for browsing, purchasing, and managing bicycles. The application includes features such as user registration and authentication, product management, order processing, and payment integration. The goal is to create a user-friendly, secure, and visually appealing platform for both customers and administrators.

## Credentials

> Admin Access 👇🏻

Email
```
dizaba@mailinator.com
```
Password
```
123456
```
<br>

> Cutomer Access 👇🏻

Email
```
customer@gmail.com
```
Password
```
hello123
```


## Features

`User Authentication:` Users can register with their name, email, and password. Passwords are securely hashed before storage.


`User Role:` Customers can view their order history and manage their profiles.

`Admin Role:` Admins can manage products, view orders, and oversee platform activities.

`JWT Token Management:` JSON Web Tokens are used for secure authentication and session management.

`Logout:` Users can log out, which removes the token from local storage and redirects them to the login page.

## Technology Stack

### Frontend
- Shadcn
- TypeScript
- React
- Redux
- RTK Query for efficient data management.

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT for authentication.

## Setup Instructions
1. Clone the Repository:
    ```
    https://github.com/rockyhaque/rapid-ride
    ```

2. Change Directory & npm installation
    ```
    cd client
    npm i
    ```
    ```
    cd server
    npm i
    ```

3. Set Up Environment Variables on `server`
    ```
    NODE_ENV=development
    PORT=5000
    DATABASE_URL= <your mongodb url>
    BCRYPT_SALT_ROUNDS=8
    ```

4. Run the Application (client & server):
    ```
    npm run dev
    ```
5. Access the Application:

    Open your browser and navigate to for `client`
    ```
    http://localhost:5173
    ```
    Open your browser and navigate to for `server`
    ```
    http://localhost:5000
    ```


## Conclusion
The Bicycle Store Application is designed to be a comprehensive solution for both customers and admin, offering a wide range of features and ensuring a smooth, secure, and enjoyable user experience. 

## Contact

For inquiries, reach out to rockyhaque71@gmail.com