import User from "../model/userModel.js";

export async function handleLogIn(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.render("logIn");
  } else if (user.password !== password) {
    return res.render("logIn");
  } else {
    return res.render("home");
  }
}
