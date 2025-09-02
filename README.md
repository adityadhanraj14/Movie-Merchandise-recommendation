# Movie&Merch 🎬🛒

Movie&Merch is a full-stack movie streaming web application that not only lets you watch your favorite movies but also suggests relevant products (merchandise, collectibles, etc.) at specific moments during playback. Built with Node.js, Express, MongoDB, and EJS, it provides a seamless and interactive movie-watching experience.

---

![Movie&Merch Screenshot](https://github.com/user-attachments/assets/eff74f6e-03f9-4ea8-be58-96c84340e40d)

---

## Features

- 🎥 Stream a wide variety of movies directly in your browser.
- 🔍 Search for movies by title or description.
- 🛍️ Get dynamic product suggestions (merch, collectibles, etc.) linked to specific scenes in the movie.
- 🧑‍🎤 View detailed movie info including cast, director, and ratings.
- 📱 Responsive design for desktop and mobile devices.

## Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** EJS, Tailwind CSS
- **Other:** Morgan (logging), dotenv (env management), body-parser

## Folder Structure

```
.
├── app.js
├── package.json
├── controllers/
│   └── movieController.js
├── models/
│   ├── Movie.js
│   └── Product.js
├── Public/
│   └── movies/
├── routes/
│   ├── movieRoutes.js
│   └── searchRoutes.js
├── scripts/
│   └── insertMovies.js
├── views/
│   ├── layouts/
│   ├── error.ejs
│   ├── home.ejs
│   ├── movie.ejs
│   └── search.ejs
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local or Atlas)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd <repo-folder>
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your MongoDB URI:
     ```
     MONGODB_URI=mongodb://localhost:27017/movieStreamingApp
     ```

4. **Insert sample movies (optional):**
   ```sh
   node scripts/insertMovies.js
   ```

5. **Start the server:**
   ```sh
   npm run dev
   ```
   or
   ```sh
   npm start
   ```

6. **Visit the app:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Browse the home page for available movies.
- Use the search bar
