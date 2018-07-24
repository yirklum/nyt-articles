import React from "react";
import SaveButton from "../../components/SaveButton";
// import { Link } from "react-router-dom";
import { Col, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

const Results = props => (

    <Col>
        <Container>
            <h1>Your Articles</h1>
        </Container>

        {props.articles.length ? (
            <List>
                {props.articles.map(article => (
                    <ListItem key={article._id}>
                        <a href={article.web_url} target="_blank">
                            {article.headline.main}
                        </a>
                        <SaveButton onClick={() => {
                            props.saveArticle(
                            {
                                title: article.headline.main,
                                url: article.web_url,
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
);

export default Results;