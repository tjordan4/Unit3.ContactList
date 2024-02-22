import { useState } from "react";
import ContactList from "./components/ContactList.jsx";

import "./App.css";

// const [contacts, setContacts] = useState(dummyContacts)
function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  console.log('App.jsx setSeletedContactId', setSelectedContactId)
  return (
    <>
      <div>
        {selectedContactId ? (
          <div>Selected Contact View</div>) : (<ContactList setSelectedContactId={setSelectedContactId} />)}
      </div>
    </>
  );
}

export default App;
