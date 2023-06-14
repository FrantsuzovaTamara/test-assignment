import { useState } from "react";
import FormValidator from "../utils/FormValidator";

function MainForm({ onSubmit }) {
  const [formValues, setFormValues] = useState([]);

  const { errors, isValid, handleChange } = FormValidator({});

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    handleChange(e, ".auth__form");

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  function submitForm(e) {
    e.preventDefault();
    onSubmit(formValues);
  }

  return (
    <form className="form" onSubmite={submitForm} noValidate>
      <label className="form__field">
        Номер телефона
        <input
          id="phone"
          type="tel"
          name="phone"
          pattern="^\+7[0-9]{10}"
          className={`form__input`}
          placeholder="+7 999 999-99-99"
          onChange={handleChangeValue}
          required
        />
        <span
          className={`form__input-error${
            errors.name ? " form__input-error_active" : ""
          }`}
        ></span>
      </label>
      <label className="form__field">
        Email
        <input
          id="email"
          type="email"
          name="email"
          pattern="^.+@.+\..+$"
          className={`form__input`}
          placeholder="some@email.com"
          onChange={handleChangeValue}
          required
        />
        <span
          className={`form__input-error${
            errors.name ? " form__input-error_active" : ""
          }`}
        ></span>
      </label>
      <button
        className={`form__button${isValid ? " form__button_active" : ""}`}
        to="/create"
        id="button-start"
        disabled={!isValid}
      >
        Начать
      </button>
    </form>
  );
}

export default MainForm;
