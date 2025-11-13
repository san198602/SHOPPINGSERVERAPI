const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');


 require("./db/db")();

var commentRoutes = require("./routes/comment.routes");
var userRoutes = require("./routes/user.routes");
var adminRoutes = require("./routes/admin.routes");
var uploadRoutes = require("./routes/upload.routes");




require('dotenv').config({ debug: true });
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
var corsOptions = {
    origin: "http://localhost:8081", // Replace with your frontend origin
    optionsSuccessStatus: 200,
    credentials: true,  // If you are sending cookies or authorization headers
    allowedHeaders: ['Content-Type', 'Authorization'] // Include other custom headers
};
app.use(cors(corsOptions));
app.use(bodyParser.json());


// Here our API Routes
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,PATCH,PUT,POST,DELETE");
    res.header("Access-Control-Expose-Headers", "Content-Length");
    res.header(
        "Access-Control-Allow-Headers",
        "Accept, Authorization,x-auth-token, Content-Type, X-Requested-With, Range"
    );
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use('/comment', commentRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/upload', uploadRoutes);

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});



module.exports = app;