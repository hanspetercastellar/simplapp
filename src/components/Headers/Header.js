import React from "react";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


const Header = ({
                    children,
                    bg,
                    styles,
                    classes,
                    titulo,
                    vista,
                    CallbackButton,
                    labelButton,
                    linkBton

}) => {

    return(
        <>
            <header
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                className= {classes ? classes:''}
                styles = {styles?styles:{}}
            >
                {children ? children :

                    <Container fluid={'fluit'} className={'d-flex justify-content-between  '}>
                        <div className={'d-flex flex-column '}>
                            <small>{vista}</small>
                            <h4 style={{'color':''}}>{titulo}</h4>
                        </div>
                        <Button
                        onClick={()=>(alert())}
                        >
                         <Link to={linkBton}>
                             {labelButton}
                         </Link>
                        </Button>
                    </Container>

                }
            </header>
        </>
    );

}

export default Header