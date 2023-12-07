const db = require("../connect");
const bcrypt = require("bcryptjs");

exports.register = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
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

exports.login = (req, res) => {};
exports.logout = (req, res) => {};
