import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Search from "../../components/Search";
import Results from "../../components/Results";
import Saved from "../../components/Saved";

class Home extends Component {
  state = {
    articles: [],
    savedArticles: [],
    title: "",
    startYear: "",
    endYear: "",
    isOpen: false
  };

    componentDidMount() {
        this.setState(
            {
                articles: [],
                title: "",
                startYear: "",
                endYear: ""
            }
        )
        this.loadSavedArticles(); 
    }

    // Load articles
    loadArticles = (keyWord, startYear, endYear) => {
        API.getArticles(keyWord, startYear, endYear)
            .then(res =>
                this.setState(
                    { 
                        articles: res.data.response.docs, 
                        title: "", 
                        startYear: "", 
                        endYear: ""
                    })    
                )
            .catch(err => console.log(err));
    };

    // Save an article
    saveArticle = obj => {
        API.saveArticle(obj)
            .then(res => this.loadSavedArticles())
            .catch(err => console.log(err));
            this.loadSavedArticles();
    };

    // Load saved articles
    loadSavedArticles = () => {
        API.getSavedArticles()
            .then(res =>
                console.log(res.data),
                this.setState(
                    {
                        // savedArticles: res.data
                    }  
                ))
                .catch(err => console.log(err));
                 
    };
  
    // Delete an article
    deleteArticle = id => {
        API.deleteArticle(id)
        .then(res => this.loadSavedArticles())
        .catch(err => console.log(err));
        this.loadSavedArticles();
    };

    // Handle input
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
        });
    };

    // Handle form submission
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title)
            this.loadArticles(
                this.state.title, 
                this.state.startYear, 
                this.state.endYear)
    };

    toggleModal = () => {
      this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>NYT Article Search</h1>
                    </Jumbotron>

                    <Search
                        keyWord={this.state.title}
                        onChangeSearch={this.handleInputChange}
                        searchName="title"
                        searchPlaceholder="Keyword (required)"

                        startYear={this.state.startYear}
                        onChangeStartYear={this.handleInputChange}
                        startYearName="startYear"
                        startYearPlaceholder="Start Year (required)"

                        endYear={this.state.endYear}
                        onChangeEndYear={this.handleInputChange}
                        endYearName="endYear"
                        endYearPlaceholder="End Year (required)"

                        disabled={!(this.state.title)}
                        onClick={this.handleFormSubmit}
                    />    
            
                    <Results
                        articles={this.state.articles}
                        saveArticle={this.saveArticle}
                        toggleModal={this.toggleModal}
                    />    

                    <Saved
                        savedArticles={this.state.savedArticles}
                        delete={this.deleteArticle}
                    />
            
                </Col>
            </Row>
        </Container>
    );
  }
}

export default Home;
