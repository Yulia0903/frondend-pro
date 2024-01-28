import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    username: "",
    phone: "",
  };

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

export default ContactForm;
