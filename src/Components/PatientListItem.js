import React from "react";
import { ListGroup} from "react-bootstrap";

export default function PatientListItem({patientData}){
 
    return(
        <ListGroup.Item variant="info" action>
            {patientData.title}
        </ListGroup.Item>
    )
}