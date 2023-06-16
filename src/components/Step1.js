import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DataContext } from "../context/DataContext";
import schema from "../utils/Schema";
import arrow from "../images/create__arrow.svg"

function Step1() {
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
    <form className="form form_location_step1" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label className="form__field">
        Никнейм
        <input
          {...register("email")}
          id="field-nickname"
          type="text"
          name="nickname"
          className={`form__input${errors ? " form__input_error" : ""}`}
          placeholder="Введите никнейм"
          required
        />
        <span
          className={`form__input-error${
            errors ? " form__input-error_active" : ""
          }`}
        ></span>
      </label>
      <label className="form__field">
        Имя
        <input
          {...register("email")}
          id="field-name"
          type="text"
          name="name"
          className={`form__input${errors ? " form__input_error" : ""}`}
          placeholder="Введите имя"
          required
        />
        <span
          className={`form__input-error${
            errors ? " form__input-error_active" : ""
          }`}
        ></span>
      </label>
      <label className="form__field">
        Фамилия
        <input
          id="field-sername"
          type="text"
          name="sername"
          className={`form__input${errors ? " form__input_error" : ""}`}
          placeholder="Введите фамилию"
          required
        />
        <span
          className={`form__input-error${
            errors ? " form__input-error_active" : ""
          }`}
        ></span>
      </label>
      <label className="form__field">
        Пол
        <select
          className={`form__select${errors ? " form__select_error" : ""}`}
          name="sex"
          id="field-sex"
          placeholder="Не выбрано"
          required
        >
          <option value="" disabled selected>Не выбрано</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
          <img className="form__icon" src={arrow} alt="icon"/>
        </select>
        <span
          className={`form__input-error${
            errors ? " form__input-error_active" : ""
          }`}
        ></span>
      </label>
      <div className="form__buttons form__buttons_location_step1">
        <button
          className={`form__button form__button_type_back${
            !errors ? " form__button_type_back_active" : ""
          }`}
          onClick={() => {
            navigate("/test-assignment");
          }}
          to="/test-assignment"
          id="button-back"
          disabled={errors}
        >
          Назад
        </button>
        <button
          className={`form__button${!errors ? " form__button_active" : ""}`}
          onClick={() => {
            navigate("/test-assignment/create/step2");
          }}
          to="/test-assignment/create/step2"
          id="button-next"
          disabled={errors}
        >
          Далее
        </button>
      </div>
    </form>
  );
}

export default Step1;
