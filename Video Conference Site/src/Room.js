import React from 'react'
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  const {roomID} = useParams();
  console.log(roomID); 

  const meeting = async(element) => {
    const appID = 1187120999;
    const serverSecret = "3954b2edd788b41dda8ad2c6a210028b";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Vaishnav");

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container:element,
      scenario:{
        mode: ZegoUIKitPrebuilt.GroupCall,
      }
    })
  };

  return <div ref={meeting} style={{ width: "100vw", height: "100vh" }}></div>;
  
}

export default Room