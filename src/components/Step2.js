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
    <form
      className="form form_location_step2"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <label className="form__field">
        Преимущества
        <div className="form__advantage">
          <input
            {...register("email")}
            id="field-advantages-1"
            type="text"
            name="advantages"
            className={`form__input${errors ? " form__input_error" : ""}`}
            placeholder="Введите текст"
            required
          />
          <button type="button" className="form__delete-button"></button>
        </div>
        <div className="form__advantage">
          <input
            {...register("email")}
            id="field-advantages-2"
            type="text"
            name="advantages"
            className={`form__input${errors ? " form__input_error" : ""}`}
            placeholder="Введите текст"
            required
          />
          <button type="button" className="form__delete-button"></button>
        </div>
        <div className="form__advantage">
          <input
            {...register("email")}
            id="field-advantages-3"
            type="text"
            name="advantages"
            className={`form__input${errors ? " form__input_error" : ""}`}
            placeholder="Введите текст"
            required
          />
          <button type="button" className="form__delete-button"></button>
        </div>
        <button type="button" className="form__add-button">
          +
        </button>
        <span
          className={`form__input-error${
            errors ? " form__input-error_active" : ""
          }`}
        ></span>
      </label>
      <fieldset className="form__field">
        Группа чекбоксов
        <label className="form__label">
          <input
            id="field-checkbox-group-option-1"
            type="checkbox"
            name="checkbox-1"
            className="form__checkback"
            required
          />
          1
        </label>
        <label className="form__label">
          <input
            id="field-checkbox-group-option-1"
            type="checkbox"
            name="checkbox-1"
            className="form__checkback"
            required
          />
          2
        </label>
        <label className="form__label">
          <input
            id="field-checkbox-group-option-1"
            type="checkbox"
            name="checkbox-1"
            className="form__checkback"
            required
          />
          3
        </label>
        <span
          className={`form__input-error${
            errors ? " form__input-error_active" : ""
          }`}
        ></span>
      </fieldset>
      <fieldset className="form__field">
        Группа radio
        <label className="form__label">
          <input
            id="field-radio-group-option-1"
            type="radio"
            name="radio-1"
            className="form__radio"
            required
          />
          1
        </label>
        <label className="form__label">
          <input
            id="field-radio-group-option-1"
            type="radio"
            name="radio-1"
            className="form__radio"
            required
          />
          2
        </label>
        <label className="form__label">
          <input
            id="field-radio-group-option-1"
            type="radio"
            name="radio-1"
            className="form__radio"
            required
          />
          3
        </label>
        <span
          className={`form__input-error${
            errors ? " form__input-error_active" : ""
          }`}
        ></span>
      </fieldset>
      <div className="form__buttons">
        <button
          className={`form__button form__button_type_back${
            !errors ? " form__button_type_back_active" : ""
          }`}
          onClick={() => {
            navigate("/test-assignment/create");
          }}
          id="button-back"
          disabled={errors}
        >
          Назад
        </button>
        <button
          className={`form__button${!errors ? " form__button_active" : ""}`}
          onClick={() => {
            navigate("/test-assignment/create/step3");
          }}
          id="button-next"
          disabled={errors}
        >
          Далее
        </button>
      </div>
    </form>
  );
}

export default Step2;
