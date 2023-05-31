import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateContact(event) {
    const { name, value } = event.target;

    setContact((previousValue) => {
      console.log(previousValue);

      if (name === "fName") {
        return {
          fName: value,
          lName: previousValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: previousValue.fName,
          lName: value,
          email: previousValue.email
        };
      } else if (name === "email") {
        return {
          fName: previousValue.fName,
          lName: previousValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={updateContact}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={updateContact}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={updateContact}
          name="email"
          placeholder="Email"
          value={contact.mail}
        />
        <button>Submit</button>
      </form>
      onChange={updateContact}
    </div>
  );
}

export default App;
