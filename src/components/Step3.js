import {useContext} from "react";
import { DataContext } from '../context/DataContext';

function Step3() {
  const formData = useContext(DataContext);

  return (
    {/* <form className="form" onSubmit={submitForm} noValidate>
      <label className="form__field">
        О себе
        <textarea
          id="field-about"
          name="about"
          className={`form__input`}
          placeholder="Начните писать..."
          onChange={handleChangeValue}
          required
        ></textarea>
        <span
          className={`form__input-error${
            errors.about ? " form__input-error_active" : ""
          }`}
        ></span>
      </label>
      <button
        className={`form__button${isValid ? " form__button_active" : ""}`}
        onClick={Navigate("/test-assignment/create/step2")}
        id="button-start"
        disabled={!isValid}
      >
        Назад
      </button>
      <button
        className={`form__button${isValid ? " form__button_active" : ""}`}
        id="button-start"
        disabled={!isValid}
      >
        Далее
      </button>
    </form> */}
  );
}

export default Step3;