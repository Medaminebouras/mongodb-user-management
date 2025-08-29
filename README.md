MongoDB User Management Project
📌 Description
This project demonstrates how to work with MongoDB in Node.js using two different approaches:

Native MongoDB Driver (db.js)

Connects to a MongoDB database (mydb).

Inserts multiple users into a users collection.

Retrieves and displays all users.

Mongoose ODM (user.js)

Defines a User schema with fields: name, email, age, and createdAt.

Provides CRUD operations including:

Create a new user.

Fetch users with pagination.

Fetch a user by email.

Update a user’s email.

Delete users created before a certain date.

This project is ideal for beginners learning MongoDB and developers comparing the native driver vs. Mongoose ODM for managing database operations.

🚀 Features
Native MongoDB usage (db.js)

Schema-based modeling with Mongoose (user.js)

Example CRUD operations (Create, Read, Update, Delete)

Pagination support for fetching users

Automatic timestamps with createdAt field

🛠️ Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/mongodb-user-management.git
cd mongodb-user-management
Install dependencies:

bash
Copy code
npm install mongoose mongodb
Start a local MongoDB instance (if not already running):

bash
Copy code
mongod
▶️ Usage
Run the native driver example:
bash
Copy code
node db.js
Run the Mongoose example:
bash
Copy code
node user.js
📂 Project Structure
graphql
Copy code
.
├── db.js        # Native MongoDB example
├── user.js      # Mongoose ODM example with CRUD operations
└── README.md    # Project documentation
📜 License
This project is open-source and available under the MIT License.
