import React from "react";
import DeleteButton from "../../components/DeleteButton";
// import { link } from "react-router-dom";
import { Col, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

const Saved = props => (

    <Col>
        <Container>
            <h1>Your Saved Articles</h1>
        </Container>

        {props.savedArticles.length ? (
            <List>
                {props.savedArticles.map(article => (
                    <ListItem key={article.externalID}>
                        <a href={article.url} target="_blank">
                            {article.title}
                        </a>
                        <DeleteButton onClick={() => {
                            props.delete(article.externalID);
                        }
                        }>
                        </DeleteButton>
                    </ListItem>    
                ))}
            </List>    
        ) : (
            <h2>No Articles Have Been Saved Yet</h2>
        )}       
    </Col>
)

export default Saved;