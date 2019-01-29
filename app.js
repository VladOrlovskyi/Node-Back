let express = require("express");
let session = require("express-session");
let mongoose = require("mongoose");
let ControllerError = require("./errors/ControllerError");
let MainApiRouter = require("./routes/index");
let morgan = require('morgan');
let cookieParser = require('cookie-parser');
let cors = require("cors");
require('./config/passport');
let passport = require("passport");

mongoose.connect("mongodb://localhost:27017/messenger233", {useNewUrlParser: true});

let app = express();


app.use(cors({origin: true, credentials: true}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
    secret: 'qwerty',
    resave: true,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


app.use("/api", MainApiRouter);

app.use((req, res, next) => {
    next(new ControllerError("Not Found", 404));
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: err.msg,
        status: err.status
    });
});


app.listen(3000, () => {
    console.log("Listening...3000")
});
