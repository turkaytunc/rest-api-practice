const data = {
  id: 553,
  title: "title",
  content: "some random content i made from my a**"
};

//  Sends all posts to client
exports.getPosts = (req, res, next) => {
  res.status(200).json(data);
};

// Creates post with client input
exports.createPost = (req, res, next) => {
  data.title = req.body.title;
  data.content = req.body.content;
  data.id = new Date().getTime();

  res.status(201).json({
    message: "post created",
    post: { id: data.id, title: data.title, content: data.content }
  });
};
