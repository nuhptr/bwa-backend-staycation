# BWA Backend Staycation

This is a simple backend for a staycation website. It is built using Node.js, Express, and MongoDB.

```sh
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run in production mode
npm start
```

## How to start using express generator

```sh
# Install express generator global
npm install -g express-generator

# Create express app
express --view=ejs [name-project]

# Install ExpressJS
# npm install express --save (if start from stratch)

# Install Nodemon (auto refresh server)
# npm install -g nodemon (if start from stratch)

# Install EJS (templating engine)
# npm install ejs (because in generator already installed)

# Install Mongoose (MongoDB ORM)
npm install mongoose

# Add nodemon in package.json
"scripts": { "dev": "nodemon ./bin/www" },

# Add method-override
npm install method-override
example in form :
<form action="/rooms/<%= room._id %>?_method=PUT" method="POST">
```

## Integrate template admin sbadmin2

```sh
# Install sbadmin2
npm i startbootstrap-sb-admin-2

# choose blank.html from downloaded repo
copy to index.ejs

# add static path to startbootstrap-sb-admin-2 in app.js
app.use(
  "/sb-admin-2",
  express.static(path.join(__dirname, "node_modules/startbootstrap-sb-admin-2"))
);

# add /sb-admin-2 to all static path in index.ejs
example :
<link href="/sb-admin-2/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
```
