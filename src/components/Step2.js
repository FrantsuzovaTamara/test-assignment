import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DataContext } from "../context/DataContext";
import schema from "../utils/Schema";

function Step2() {
  const { formData, setFormData } = useContext(DataContext);

  const navigate = useNavigate();

  const { register, handleSubmit, errors } = useForm({
    defaultValues: { nickname: formData.nickname, name: formData.name },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  function onSubmit(e) {
    e.preventDefault();
    setFormData(formData);
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label className="form__field">
        Преимущества
        <div>
          <input
            {...register("email")}
            id="field-advantages-1"
            type="text"
            name="advantages"
            className={`form__input${errors ? " form__input_error" : ""}`}
            placeholder="Введите текст"
            required
          />
          <span
            className={`form__input-error${
              errors ? " form__input-error_active" : ""
            }`}
          ></span>
          <button></button>
        </div>
        <div>
          <input
            {...register("email")}
            id="field-advantages-2"
            type="text"
            name="advantages"
            className={`form__input${errors ? " form__input_error" : ""}`}
            placeholder="Введите текст"
            required
          />
          <span
            className={`form__input-error${
              errors ? " form__input-error_active" : ""
            }`}
          ></span>
          <button></button>
        </div>
        <div>
          <input
            {...register("email")}
            id="field-advantages-3"
            type="text"
            name="advantages"
            className={`form__input${errors ? " form__input_error" : ""}`}
            placeholder="Введите текст"
            required
          />
          <span
            className={`form__input-error${
              errors ? " form__input-error_active" : ""
            }`}
          ></span>
          <button></button>
        </div>
        <button>+</button>
      </label>
      <label className="form__field">
        Группа чекбоксов
        <input
          id="field-checkbox-group-option-1"
          type="checkbox"
          name="checkbox-1"
          className={`form__input${errors ? " form__input_error" : ""}`}
          placeholder="1"
          required
        />
        <input
          id="field-checkbox-group-option-1"
          type="checkbox"
          name="checkbox-2"
          className={`form__input${errors ? " form__input_error" : ""}`}
          placeholder="2"
          required
        />
        <input
          id="field-checkbox-group-option-1"
          type="checkbox"
          name="checkbox-3"
          className={`form__input${errors ? " form__input_error" : ""}`}
          placeholder="3"
          required
        />
        <span
          className={`form__input-error${
            errors ? " form__input-error_active" : ""
          }`}
        ></span>
      </label>
      <label className="form__field">
        Группа radio
        <input
          id="field-radio-group-option-1"
          type="radio"
          name="radio-1"
          className={`form__input${errors ? " form__input_error" : ""}`}
          placeholder="1"
          required
        />
        <input
          id="field-radio-group-option-1"
          type="radio"
          name="radio-2"
          className={`form__input${errors ? " form__input_error" : ""}`}
          placeholder="2"
          required
        />
        <input
          id="field-radio-group-option-1"
          type="radio"
          name="radio-3"
          className={`form__input${errors ? " form__input_error" : ""}`}
          placeholder="3"
          required
        />
        <span
          className={`form__input-error${
            errors ? " form__input-error_active" : ""
          }`}
        ></span>
      </label>
      <div className="form__buttons">
        <button
          className={`form__button${errors ? " form__button_active" : ""}`}
          onClick={() => {navigate("/test-assignment/create")}}
          id="button-start"
          disabled={errors}
        >
          Назад
        </button>
        <button
          className={`form__button${errors ? " form__button_active" : ""}`}
          onClick={() => {navigate("/test-assignment/create/step3")}}
          id="button-start"
          disabled={errors}
        >
          Далее
        </button>
      </div>
    </form>
  );
}

export default Step2;
