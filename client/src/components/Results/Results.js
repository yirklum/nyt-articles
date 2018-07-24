import React from "react";
import SaveButton from "../SaveButton";
// import { Link } from "react-router-dom";
import { Col, Container } from "../Grid";
import { List, ListItem } from "../List";

const Results = props => (

    <Col size="md-12">
        <Container>
            <h1>Search Results</h1>
        </Container>

        {props.articles.length ? (
            <List>
                {props.articles.map(article => (
                    <ListItem key={article._id}>
                        <a href={article.web_url} target="_blank">
                            {article.headline.main}
                        </a> <br/>
                        {article.byline.original} <br/>
                        {article.pub_date} <br/>
                        {article.snippet} <br/> 
                        <SaveButton onClick={() => {
                            props.saveArticle(
                            {
                                title: article.headline.main,
                                date: article.pub_date,
                                url: article.web_url,
                                synopsis: article.snippet,
                                externalID: article._id
                            }
                            );
                            props.toggleModal()
                            }
                        }>    
                        </SaveButton>
                    </ListItem>        
                ))}
            </List>    
        ) : (
            <h2>Search Returned No Results</h2>
            )}    

    </Col>
)

export default Results;