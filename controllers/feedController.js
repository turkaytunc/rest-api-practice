const data = {
  id: 553,
  title: "title",
  content: "some random content i made from my a**"
};

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
