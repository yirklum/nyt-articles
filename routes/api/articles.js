const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);
  
  // app.get('/', function(req, res, next) {
  //   // Handle the get for this route
  // });

// router.route("/api/articles")
//   .get(articlesController.findById)
//   .post(articlesController.create);
  // // Get saved articles
  // getSavedArticles: function() {
  //   return axios.get("/api/articles");
  // },
  
  // app.post('/', function(req, res, next) {
  //  // Handle the post for this route
  // });

module.exports = router;
