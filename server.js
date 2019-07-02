const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// const routes = require("./routes");

const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// MongoDB for Heroku Prod
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/crsnew", { useNewUrlParser: true })
// MongoDB for local
// mongoose.connect("mongodb://localhost/crsnew", { useNewUrlParser: true })
.then(() => console.log("MongoDB successfully connected"))
.catch( err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

app.use("/api/appointments", appointments);
// app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  //set static folder  
    app.use(express.static("client/build"));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there


app.listen(port, () => console.log(`Server up and running on port ${port} !`));