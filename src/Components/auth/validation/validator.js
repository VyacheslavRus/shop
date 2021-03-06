// /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
// (?=.*[0-9]) - строка содержит хотя бы одно число;
// (?=.*[!@#$%^&*]) - строка содержит хотя бы один спецсимвол;
// (?=.*[a-z]) - строка содержит хотя бы одну латинскую букву в нижнем регистре;
// (?=.*[A-Z]) - строка содержит хотя бы одну латинскую букву в верхнем регистре;
// [0-9a-zA-Z!@#$%^&*]{6,} - строка состоит не менее, чем из 6 вышеупомянутых символов.

import * as yup from "yup";

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("введите правильный пароль")
    .min(6, "min-6")
    .max(12, "max-12"),
  // .matches(/^(?=.*[0-9a-zA-Z!@#$%^&*]{6,})$/, "чушь"),
});

export default schema;
