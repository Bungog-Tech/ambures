import React from "react";
import { Popover, Button,OverlayTrigger,ButtonToolbar } from "react-bootstrap";

export default function ActiveDriverPopOverButton(keyData) {

  const openPopOver = () =>{
    const popoverButton = document.querySelector(".popover");
    popoverButton.classList.remove("show");

  }





  const popoverLeft = (
    <Popover id="popover-positioned-left popover-container" title="Popover left">
       <Button variant="outline-success" className="over-buttons"><i className="fas fa-exclamation-circle " ></i>Driver Info</Button>
       <Button variant="outline-danger" className="over-buttons"><i className="fas fa-ambulance "></i>Passengers</Button>
       <Button variant="outline-primary" className="over-buttons"><i className="far fa-edit "></i>Edit Driver Status</Button>
    </Popover>
  );

  return (
    <>
      <ButtonToolbar  style={{float:"right"}}>
        <OverlayTrigger
          trigger="click"
          placement="left"
          overlay={popoverLeft}
        >
          <Button variant="outline-secondary"  onClick={() => openPopOver()}><i className='fas fa-ellipsis-h'></i></Button>
        </OverlayTrigger>
      </ButtonToolbar>
    </>
  );
}
