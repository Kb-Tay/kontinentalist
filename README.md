# kontinentalist

## Task 1: Web Application

### Description
This web application was created using React.js and Javascript. Libraries used include React Query data fetching, Chakra UI for styling.

### Features
- [X] Viewing article's images, title and dek on dashboard
- [X] Allow scrolling of different article pages
- [X] Display topics summary in sidebar, scrolling to relevant article on click

### Installation
- Clone the repository
- `cd` into the `kotinentalist/frontend` folder
- Install dependencies separately in the frontend folders with `npm install`
- Run the application with `npm start` for the frontend and view application on your localhost!

### Preview
![screenshot](https://github.com/Kb-Tay/kontinentalist/blob/main/frontend/public/Kontinentalist.png)

### Task 2: API Server:

### Description
This API was created with Node.js and Express.js

### Installation
- Clone the repository
- `cd` into the `kontinentalist/server` folder
- Install dependencies separately in the backend folders with `npm install`
- Run the application with `npm run dev` for server
- Note that the server will be run on `http://localhost:3000`

#### GET
1. `GET /post` - Gets all posts
2. `GET /post/:id` - Gets post with specific id

#### POST 
1. `POST /posts`- Creates new post
   - Requires the following request body params
```
{
  title: "title1",
  content: "content1"
}
```

#### PATCH 
1. `PATCH /posts/:id`- Updates a post with specified id 
   - Requires the following request body params
```
{
  title: "title1",
  content: "content1"
}
```

#### DELETE
1. `DELETE /posts/:id` - Deletes a post with specified id


