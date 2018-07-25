import axios from "axios";

export default {

  // Get saved articles
  getArticles: function() {
    return axios.get("/api/articles");
  },

  // Get article with given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },

  // Delete article with given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },

  // Save article to database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },

  // Search NYT API
  getArticles: function(keyWord, startYear, endYear) {
    
    const authKey = "fbcf0b26206c4b9aae7d6eb569789e46";

    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey +
    "&q=" + keyWord + "&begin_date=" + startYear + "0101 &end_date=" + endYear + "0101";
  

    return axios.get(queryURL);
  }
};
