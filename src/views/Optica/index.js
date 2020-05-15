import React from "react";
import {Container} from "react-bootstrap";
import Header from "../../components/Headers/Header";
import Table from "../../components/Tables/TablaEjemplo";

const Index = () =>{
    return(
      <>
          <Container className={'pb-md-5 pb-5 pt-sm-3 pt-md-5 container'}>
              <Header></Header>
              <Table/>
          </Container>
      </>
    );
}

export default Index