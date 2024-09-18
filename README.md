# Tech-Blog-1.0

## Description

This CMS-style tech blog allows developers to publish their own blog posts, comment on others' posts, and manage their content. The project is built with Node.js, Express.js, Sequelize, Handlebars.js, and PostgreSQL, following the MVC (Model-View-Controller) paradigm. Authentication is handled using `express-session` and `bcrypt`. The blog is deployed using Render.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Testing API Endpoints with Insomnia](#testing-api-endpoints-with-insomnia)
- [Technologies](#technologies)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd cms-tech-blog
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file and configure the following environment variables:
    ```bash
    DB_NAME='your_database_name'
    DB_USER='your_database_username'
    DB_PASSWORD='your_database_password'
    DB_HOST='localhost'
    DB_PORT=5432
    SESSION_SECRET='your_secret'
    ```
5. Initialize the database:
    ```bash
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    ```
6. Start the server:
    ```bash
    npm start
    ```

## Usage

1. Access the application at `http://localhost:3001/`.
2. Users can sign up, log in, create, edit, and delete blog posts.
3. Users can also comment on others' blog posts.

## Routes

### User Routes

- **POST** `/api/users/login`: Logs in a user.
- **POST** `/api/users/signup`: Registers a new user.
- **POST** `/api/users/logout`: Logs out the current user.

### Post Routes

- **GET** `/api/posts`: Retrieves all posts.
- **GET** `/api/posts/:id`: Retrieves a post by its ID.
- **POST** `/api/posts`: Creates a new post.
- **PUT** `/api/posts/:id`: Updates an existing post by ID.
- **DELETE** `/api/posts/:id`: Deletes a post by ID.

### Comment Routes

- **GET** `/api/comments`: Retrieves all comments.
- **POST** `/api/comments`: Creates a new comment.
- **DELETE** `/api/comments/:id`: Deletes a comment by ID.

## Testing API Endpoints with Insomnia

1. Install Insomnia or any API client of your choice.
2. Make sure your server is running locally by executing:
    ```bash
    npm start
    ```
3. In Insomnia, create a new request and set the URL as `http://localhost:3001/` followed by the route you want to test.
4. Example for retrieving all posts:
    - Method: **GET**
    - URL: `http://localhost:3001/api/posts`
5. Example for creating a new post:
    - Method: **POST**
    - URL: `http://localhost:3001/api/posts`
    - Body:
        ```json
        {
            "title": "New Blog Post",
            "content": "This is the content of the blog post."
        }
        ```

## Technologies

- Node.js
- Express.js
- Handlebars.js
- Sequelize
- PostgreSQL
- Bcrypt
- Express-session
- Connect-session-sequelize

## License

This project is licensed under the MIT License.
