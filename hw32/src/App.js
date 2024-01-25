import React, { Component } from "react";

class Contacts extends Component {
  render() {
    const { contacts, onDelete, onShowForm } = this.props;

    return (
      <div>
        <h2>Список контактів</h2>
        <table>
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Прізвище</th>
              <th>Телефон</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.username}</td>
                <td>{contact.phone}</td>
                <td>
                  <button onClick={() => onDelete(contact.id)}>Видалити</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={onShowForm}>Додати контакт</button>
      </div>
    );
  }
}

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      phone: "",
    };
  }

  handleSave = () => {
    const { onSave } = this.props;
    onSave({ ...this.state });
    this.setState({ name: "", username: "", phone: "" });
  };

  render() {
    const { onCancel } = this.props;
    const { name, username, phone } = this.state;

    return (
      <div>
        <h2>Форма контакту</h2>
        <label>
          Ім'я:
          <input
            type="text"
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </label>
        <label>
          Прізвище:
          <input
            type="text"
            value={username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </label>
        <label>
          Телефон:
          <input
            type="text"
            value={phone}
            onChange={(e) => this.setState({ phone: e.target.value })}
          />
        </label>
        <button onClick={this.handleSave}>Зберегти</button>
        <button onClick={onCancel}>Скасувати</button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isFormVisible: false,
    };
  }

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ contacts: data }));
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleShowForm = () => {
    this.setState({ isFormVisible: true });
  };

  handleHideForm = () => {
    this.setState({ isFormVisible: false });
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
            onCancel={this.handleHideForm}
          />
        ) : (
          <Contacts
            contacts={contacts}
            onDelete={this.handleDelete}
            onShowForm={this.handleShowForm}
          />
        )}
      </div>
    );
  }
}

export default App;
