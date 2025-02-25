# Rapid Ride - A Bicycle Store Backend

An Express application with TypeScript, integrating MongoDB with Mongoose to manage a Bicycle Store. Ensure data integrity using Mongoose schema validation.

> Live Link ➡️ https://rapid-ride-server.vercel.app

## Features

### Bicycle Management

- Add new bicycles with details like name, brand, price, type, and availability.
- Retrieve all bicycles or filter using search terms (e.g., type, brand, name).
- View details of a specific bicycle by its ID.
- Update bicycle information such as price, quantity, or stock status.
- Delete a bicycle from the inventory.

### Order Management

- Place orders for bicycles with email, bicycle, quantity, and total price.
- Validate stock availability before order creation.
- Automatically reduce inventory when an order is placed.

### Inventory Management

- Update bicycle inventory dynamically.
- Mark a bicycle as out of stock when the quantity reaches zero.
- Handle insufficient stock scenarios with proper error messages.

### Revenue Calculation

- Calculate total revenue generated from all orders.
- Leverage MongoDB aggregation pipelines for efficient revenue computation.

### Error Handling

- Comprehensive error handling for bicycle unavailability and insufficient stock.
- Detailed, user-friendly error responses.
- Missing or invalid data.

## Tech Stack

- **Backend:** Node.js, Express.js, TypeScript.
- **Database:** MongoDB with Mongoose.
- **Other Tools:** ESLint, Prettier, Nodemon

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- MongoDB (running instance locally or in the cloud)
- Git

## Setup Instructions

1. Clone the Repository:

   ```
   https://github.com/rockyhaque/rapid-ride
   ```

2. Change Directory & npm installation

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

   Open your browser and navigate to for `server`

   ```
   http://localhost:5000
   ```


## Contact

For inquiries, reach out to rockyhaque71@gmail.com
