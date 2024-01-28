import React, { useState } from "react";

const ContactForm = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    phone: "",
  });

  const handleSave = () => {
    onSave({ ...formData });
    setFormData({ name: "", username: "", phone: "" });
  };

  return (
    <div>
      <h2>Форма контакту</h2>
      <label>
        Ім'я:
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <label>
        Прізвище:
        <input
          type="text"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
      </label>
      <label>
        Телефон:
        <input
          type="text"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </label>
      <button onClick={handleSave}>Зберегти</button>
      <button onClick={onCancel}>Скасувати</button>
    </div>
  );
};

export default ContactForm;
