import React from "react";
import DeleteButton from "../DeleteButton";
// import { link } from "react-router-dom";
import { Col, Container } from "../Grid";
import { List, ListItem } from "../List";

const Saved = props => (

    <Col size="md-12">
        <Container>
            <h1>Your Favorite Articles</h1>
        </Container>

        {props.savedArticles.length ? (
            <List>
                {props.savedArticles.map(article => (
                    <ListItem key={article.externalID}>
                        <a href={article.url} target="_blank">
                            {article.title}
                        </a>
                        {article.author}
                        {article.date}
                        {article.synopsis}
                        <DeleteButton onClick={() => {
                            props.delete(article.externalID);
                            }
                        }>
                        </DeleteButton>
                    </ListItem>    
                ))}
            </List>    
        ) : (
            <h2>No Articles Have Been Saved</h2>
        )}       
    </Col>
)

export default Saved;