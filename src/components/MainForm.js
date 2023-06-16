import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../utils/Schema";
import { DataContext } from "../context/DataContext";
import { useForm } from "react-hook-form";
import { parsePhoneNumberFromString } from "libphonenumber-js";

function MainForm() {
  const {formData, setFormData} = useContext(DataContext);
  
  const navigate = useNavigate(); 

  const { register, handleSubmit, errors } = useForm({
    defaultValues: { phone: formData.phone, email: formData.email },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleChangeValue = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function onSubmit(e) {
    e.preventDefault();
    setFormData(formData);
  }

  function maskedPhoneNumber(e) {
    const phoneNumber = parsePhoneNumberFromString(e.target.value)
    if (!phoneNumber) {
      return e.target.value;
    }
    return phoneNumber.formatInternational();
  }

  return (
    <form className="form form_location_main" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label className="form__field">
        Номер телефона
        <input
          {...register('phone')}
          id="phone"
          type="tel"
          name="phone"
          className={`form__input form__input_location_main${errors ? " form__input_error" : ""}`}
          placeholder="+7 999 999-99-99"
          onChange={maskedPhoneNumber}
          required
        />
        <span
          className={`form__input-error${
            errors ? " form__input-error_active" : ""
          }`}
        >{errors ? errors.message : ""}</span>
      </label>
      <label className="form__field">
        Email
        <input
          {...register('email')}
          id="email"
          type="email"
          name="email"
          className={`form__input form__input_location_main${errors ? " form__input_error" : ""}`}
          placeholder="some@email.com"
          onChange={handleChangeValue}
          required
        />
        <span
          className={`form__input-error${
            errors ? " form__input-error_active" : ""
          }`}
        >{errors ? errors.message : ""}</span>
      </label>
      <button
        className={`form__button form__button_type_start${!errors ? " form__button_active" : ""}`}
        onClick={() => {navigate("/test-assignment/create")}}
        id="button-start"
        disabled={errors}
      >
        Начать
      </button>
    </form>
  );
}

export default MainForm;
