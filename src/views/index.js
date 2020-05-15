import React from "react";
import {Container, Jumbotron,Button} from "react-bootstrap";
import Header from "../components/Headers/Header";

const Index = ({}) =>(
    <>

        <Container className={'pb-md-5 pb-5 pt-sm-3 pt-md-5'}>
            <Header>
                <h1>hHasn</h1>
            </Header>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </Container>
    </>
);

export default Index;