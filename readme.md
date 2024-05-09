# Simple Error Monitoring Project with Visualization (JS, MongoDB, Handlebars, Chart.js)

**Description:**

This is a basic error monitoring project inspired by Sentry. It's written in JavaScript and utilizes MongoDB for data storage. Handlebars is used as the templating engine for the frontend, and Chart.js provides error visualizations.

**Features:**

- Capture and store error messages
- Visualize errors using Chart.js

**Note:**

## This project is an early creation from my student days and is intended for reference or learning purposes

**Tech Stack:**

- JavaScript
- MongoDB
- Handlebars
- Chart.js

**Getting Started:**

1. Clone the repository:

   ```bash
   git clone https://github.com/emilTaci/errgle.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure MongoDB:

   - Add your MongoDB connection string to environment variables (e.g., `.env` file):

     ```env
      MONGODB_USERNAME=
      MONGODB_PASSWORD=
      MONGODB_DATABASE=
      MONGODB_HOSTNAME=
      MONGODB_PORT=
     ```

4. Run the application (refer to `package.json` for other scripts):

   ```bash
   npm start
   ```
