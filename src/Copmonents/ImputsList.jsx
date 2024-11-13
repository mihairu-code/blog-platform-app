import { TextInput } from "@gravity-ui/uikit";
import React, { useState } from "react";
import "../styles/ImputsList.less";

export default function ImputsList() {
  const inputs = [
    { name: "Username", type: "text", placeholder: "Username", errorMessage: "Username is required." },
    { name: "Email Address", type: "email", placeholder: "Email Address", errorMessage: "Invalid email format." },
    { name: "Password", type: "password", placeholder: "Password", errorMessage: "Password must be at least 6 characters." },
    { name: "Repeat Password", type: "password", placeholder: "Repeat Password", errorMessage: "Passwords must match." },
  ];

  const [placeholders, setPlaceholders] = useState(
    inputs.map((input) => input.placeholder) // Изначальные значения placeholder
  );
  const [notes, setNotes] = useState({}); // Для управления note
  const [values, setValues] = useState(inputs.map(() => "")); // Для хранения введённых значений

  const handleFocus = (index, name) => {
    setPlaceholders((prev) => prev.map((p, i) => (i === index ? "" : p))); // Убираем placeholder
    setNotes((prevNotes) => ({ ...prevNotes, [index]: name })); // Устанавливаем note
  };

  const handleBlur = (index) => {
    // Возвращаем placeholder, если поле пустое
    setPlaceholders((prev) =>
      prev.map((p, i) => (i === index && !values[index] ? inputs[index].placeholder : p))
    );

    // Убираем note, только если поле пустое
    setNotes((prevNotes) => ({
      ...prevNotes,
      [index]: values[index] ? prevNotes[index] : "",
    }));
  };

  const handleChange = (index, value) => {
    // Обновляем значение инпута
    setValues((prevValues) => prevValues.map((v, i) => (i === index ? value : v)));
  };

  return (
    <section className="imputs">
      {inputs.map((input, index) => (
        <TextInput
          type={input.type}
          key={index}
          size="l"
          placeholder={placeholders[index]}
          errorPlacement="inside"
          errorMessage={input.errorMessage}
          validationState="invalid"
          name="input"
          note={<span className="notes-text">{notes[index] || ""}</span>}
          onFocus={() => handleFocus(index, input.name)}
          onBlur={() => handleBlur(index)}
          onChange={(e) => handleChange(index, e.target.value)} // Отслеживаем изменения
        />
      ))}
    </section>
  );
}
