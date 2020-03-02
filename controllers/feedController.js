const { validationResult } = require("express-validator");
const Post = require("../models/Post");

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
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: "images/dayi.png",
    creator: { name: "Turkay Tunc" }
  });

  post
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({ message: "post created", post: result });
    })
    .catch(err => console.log(err));
};
