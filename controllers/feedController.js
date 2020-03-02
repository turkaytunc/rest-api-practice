const { validationResult } = require("express-validator");

//  Sends all posts to client
exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "Post Title",
        content: "lorem ipsum content",
        imageUrl: "images/duck.jpg",
        creator: {
          name: "Turkay"
        },
        createdAt: new Date()
      }
    ]
  });
};

// Creates post with client input
exports.createPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ message: "Validation failed!!", errors: errors.array() });
  }
  let title = req.body.title;
  let content = req.body.content;
  let id = new Date().getTime();

  res.status(201).json({
    message: "post created",
    post: {
      id: id,
      title: title,
      content: content,
      creator: { name: "Turkay Tunc" },
      createdAt: new Date()
    }
  });
};
