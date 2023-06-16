import * as yup from "yup";

const schema = yup.object().shape({
  phone: yup
    .string()
    .min(11)
    .max(11)
    .required("Поле должно быть заполнено"),
  email: yup
    .string()
    .email("Email введён неверно")
    .required("Поле должно быть заполнено"),
  nickname: yup
    .string()
    .min(2, "Минимальная длина никнейма - 2 символа")
    .max(30, "Слишком длинный никнейм. Максимальная длина - 30 символов")
    .matches(/^([^0-9]*)$/, "Не должен содержать спецсимволов")
    .required("Поле должно быть заполнено"),
  name: yup
    .string()
    .min(2, "Минимальная длина имени - 2 символа")
    .max(50, "Слишком длинное имя. Максимальная длина - 50 символов")
    .matches(/^([^0-9]*)$/, "Должно содержать только буквы")
    .required("Поле должно быть заполнено"),
  sex: yup
    .mixed()
    .oneOf(["male", "female"])
    .defined("Выберите вариант"),
});

export default schema;