import React ,{useState,useEffect} from "react";
import {Card, Col, Form, FormControl, FormLabel, Row} from "react-bootstrap";

const tipoTerceroCheck = [
    {
        tipo:'Proveedor',
        isChecked:false
    },
    {
        tipo:'Cliente',
        isChecked:true
    },
    {
        tipo:'Distribuidor',
        isChecked:false
    },
    {
        tipo:'Otro',
        isChecked:false
    }
]

