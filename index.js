import express from "express";
import path from "path";
import urlRoute from "./routes/urlRoute.js";
import staticRoute from "./routes/staticRouter.js";
import userRouter from './routes/userRoute.js'
import { connectDB } from "./connect.js";
import URLModel from "./model/urlModel.js";

const app = express();

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//MongoDB connection
connectDB()
  .then(() => console.log("Connected to DB"))
  .catch((err) => {
    console.log(err);
  });

//EJS view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//Routes
app.use("/url", urlRoute);
app.use("/url/analytics/id", urlRoute);
app.use("/url/id", urlRoute);
app.use("/", staticRoute);
app.use('/signup',userRouter)
app.use('/login',userRouter)


//Server Listening
app.listen(8001, () => {
  console.log("Server started at port: 8000");
});
