const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    if (!email || !password)
      return res.status(400).send("I need more information");
    console.log(User);
    const user = await User.findOne({
      where: {
        email,
      },
    });
    console.log(user);
    if (!user) return res.status(404).send("User not found");
    return user.password === password
      ? res.status(200).json({ access: true })
      : res.status(403).send("wrong password");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = login;
