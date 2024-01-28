import React from "react";

const Contacts = ({ contacts, onDelete, onShowForm }) => (
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

export default Contacts;
