import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
        discription={contacts[0].discription}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
        discription={contacts[1].discription}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
        discription={contacts[2].discription}
      />
      <Card
        name={contacts[3].name}
        img={contacts[3].imgURL}
        tel={contacts[3].phone}
        email={contacts[3].email}
        discription={contacts[3].discription}
        
      />
      
    </div>
  );
}

export default App;
