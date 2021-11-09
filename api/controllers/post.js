var { postModel } = require('../models/posts');

module.exports.getPosts = function (req, res) {
  const date = req.body.date;
  const email = req.body.email;
//{ "createdAt": date }
  postModel.find()
    .populate("user")
    .exec((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data.filter(data => {
          return (data.user.email == email);
        }))
      }
    });
};

module.exports.sendPost = function (req, res) {
  const post = new postModel({ ...req.body });
  try {
    post.save(function (err, data) {
      if (err) {
        return res.status(409).send({ success: false, err: [err["message"]] });
      }
      res.status(201).send({ success: true, result: data });
    });
  } catch (error) {
    next(error);
  }
};
module.exports.updatePost = function (req, res) {
    postModel.findByIdAndUpdate(req.body.postId, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
  
      }
    })
};
module.exports.deletePost = function (req, res) {
  postModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        result: data
      })
    }
  })
};
module.exports.updateStatus = function (req, res) {
  postModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);

    }
  })
};
