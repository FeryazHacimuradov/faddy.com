exports.getUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "It is working...",
  });
};
