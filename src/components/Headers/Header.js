import React from "react";
import {Nav, Navbar} from "react-bootstrap";


const Header = ({children}) => {

    return(
        <>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                className={'mt-md-3 mb-md-3 header-interno bg-white rounded-sm'}
                bg={'white'}
            >
                {children ? children :
                <div className={'d-flex'}>
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </div>

                }

            </Nav>
        </>
    );

}

export default Header