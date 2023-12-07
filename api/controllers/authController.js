const db = require("../connect");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err)
      return res.status(500).json({
        error: err,
      });

    if (data.length)
      return res.status(409).json({
        message: "User already exists!",
      });

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const insertQuery =
      "INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?, ?, ?, ?)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(insertQuery, values, (err, data) => {
      if (err)
        return res.status(500).json({
          error: err,
        });

      return res.status(200).json({
        status: "success",
        message: "User has been created.",
      });
    });
  });
};

exports.login = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, req.body.email, (err, data) => {
    if (err)
      return res.status(500).json({
        error: err,
      });
    if (data.length === 0)
      return res.status(404).json({
        message: "User not found!",
      });

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return res.status(400).json({
        message: "Wrong Password or Email!",
      });

    const token = jwt.sign({ id: data[0].id }, "secretkey");

    const { password, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};
exports.logout = (req, res) => {};
