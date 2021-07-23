import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

const FbMessenger = () => {
  return (
    <div>
      <MessengerCustomerChat pageId="<PAGE_ID>" appId="<APP_ID>" />
    </div>
  );
};

export default FbMessenger;
