import React, { Component } from "react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";

class App extends Component {
  state = {
    contacts: [],
    isFormVisible: false,
  };

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ contacts: data }));
  };

  toggleFormVisibility = () => {
    this.setState((prevState) => ({ isFormVisible: !prevState.isFormVisible }));
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleSaveContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { id: prevState.contacts.length + 1, ...newContact },
      ],
      isFormVisible: false,
    }));
  };

  render() {
    const { contacts, isFormVisible } = this.state;

    return (
      <div>
        <h1>Мій React Проєкт</h1>
        {isFormVisible ? (
          <ContactForm
            onSave={this.handleSaveContact}
            onCancel={this.toggleFormVisibility}
          />
        ) : (
          <Contacts
            contacts={contacts}
            onDelete={this.handleDelete}
            onShowForm={this.toggleFormVisibility}
          />
        )}
      </div>
    );
  }
}

export default App;
