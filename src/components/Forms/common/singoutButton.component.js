import React from "react";
import { removeUserSession, getUser, getCurrentTenant } from '../../../helpers/auth.helper'
import { Dropdown, Button } from 'react-bootstrap'


const SingoutButton = ({children, history}) => {
    const { name  } = getUser();
    const { name: nameTenant } = getCurrentTenant()
   function  handleCLic(e){
       
       removeUserSession()
       history.push("/auth")
    }

    return (
        <>
         <Button variant="secundary">{nameTenant}</Button>
        <Dropdown>            
                <Button variant="secundary">{name}</Button>
                <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
                <Dropdown.Menu className="dropdown-menu-right">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={handleCLic}>Salir</Dropdown.Item>
                </Dropdown.Menu>
        </Dropdown>
        </>
    )

}

export default SingoutButton