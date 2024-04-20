import User from "../model/userModel.js";

export async function handleSignUp(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.render('home')
}
