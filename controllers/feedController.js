const data = { id: 0, title: "", content: "" };

exports.getPosts = (req, res, next) => {
  res.status(200).json(data);
};

exports.createPost = (req, res, next) => {
  data.title = req.body.title;
  data.content = req.body.content;
  data.id = new Date().getTime();

  res.status(201).json({
    message: "post created",
    post: { id: data.id, title: data.title, content: data.content }
  });
};
