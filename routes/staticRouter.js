import express from "express";
import URLModel from "../model/urlModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const allURl = await URLModel.find({});
  res.render("home", {
    urls: allURl,
  });
});

router.get('/signup',async(req,res)=>{
  res.render('signUp')
})

router.get('/login',(req,res)=>{
  res.render('logIn')
})

export default router;
