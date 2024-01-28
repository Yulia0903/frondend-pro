import React, { useState, useEffect } from "react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isFormVisible, setFormVisibility] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const toggleFormVisibility = () => {
    setFormVisibility((prevVisibility) => !prevVisibility);
  };

  const handleSaveContact = (newContact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: prevContacts.length + 1, ...newContact },
    ]);
    setFormVisibility(false);
  };

  return (
    <div>
      <h1>Мій React Проєкт</h1>
      {isFormVisible ? (
        <ContactForm
          onSave={handleSaveContact}
          onCancel={() => setFormVisibility(false)}
        />
      ) : (
        <Contacts
          contacts={contacts}
          onDelete={handleDelete}
          onShowForm={toggleFormVisibility}
        />
      )}
    </div>
  );
};

export default App;
