import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import config from "./src/model/config.js";
import authRoutes from "./src/routes/authRoutes.js";

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES 
authRoutes(app)

// setting up cors
app.use(cors());app.get("/", (req, res) => {
  res.send("Welcome to My gym");
});

// jwt setup
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        console.log(req.user);
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], `${process.env.JWT_SECRET}`, (err, decode) => {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});


app.listen(config.port, () => {
  console.log(`Server running at ${config.url}`);
});

