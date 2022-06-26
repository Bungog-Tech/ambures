import React from "react";
import { ListGroup} from "react-bootstrap";

export default function PatientListItem({patientData}){
 
    return(
        <ListGroup.Item action>
            {patientData.title}
        </ListGroup.Item>
    )
}