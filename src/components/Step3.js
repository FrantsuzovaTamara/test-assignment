import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DataContext } from "../context/DataContext";
import schema from "../utils/Schema";

function Step3({setIsOpen}) {
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
    <form className="form form_location_step3" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label className="form__field">
        О себе
        <textarea
          id="field-about"
          name="about"
          className={`form__input form__input_location_step3${errors ? " form__input_error" : ""}`}
          placeholder="Начните писать..."
          required
        ></textarea>
        <span
            className={`form__input-error${
              errors ? " form__input-error_active" : ""
            }`}
          ></span>
      </label>
      <div className="form__buttons">
        <button
          className={`form__button form__button_type_back${!errors ? " form__button_type_back_active" : ""}`}
          onClick={() => {navigate("/test-assignment/create/step2")}}
          id="button-back"
          disabled={errors}
        >
          Назад
        </button>
        <button
          className={`form__button${!errors ? " form__button_active" : ""}`}
          id="button-send"
          onClick={setIsOpen(true)}
          disabled={errors}
        >
          Отправить
        </button>
      </div>
    </form>
  );
}

export default Step3;