import React from "react";
import { Col, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { PromiseProvider } from "mongoose";

const Search = props => (
    <Col>
        <Container>
            <h1> Search for Articles</h1>
        </Container>

        <form>
            <Input
                value={props.keyWord}
                onChange={props.onChangeSearch}
                name={props.searchName}
                placeholder={props.searchPlaceholder}
            />
            <Input
                value={props.startYear}
                onChange={props.onChangeStartYear}
                name={props.startYearName}
                placeholder={Props.startYearPlaceholder}
            />
            <Input    
                value={props.endYear}
                onChange={props.onChangeEndYear}
                name={props.endYearName}
                placeholder={props.endYearPlaceholder}
            />
            <SearchButton
                disabled={props.disabled}
                onClick={props.onClick}
            >     
            Search for Articles
            </SearchButton>   
        </form>
    </Col>          
)