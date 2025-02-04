import * as yup from "yup";

export const schema = yup.object({
  firstName: yup.string().required("Required field"),
  lastName: yup.string().required("Required field"),
  email: yup.string().email("Email valid").required(),
  password: yup
    .string()
    .matches(/[a-z]/, "Necessite 1 lettre")
    .matches(/[A-Z]/, "Necessite 1 majuscule  ")
    .matches(/[1-9]/, "Necessite 1 nombre")
    .matches(/[@!?]/, "Necessite un caractère spécial")
    .min(8, "Minimum 8 ")
    .required("Ce champ est requis"),
  confirm_password: yup
    .string()
    .matches(/[a-z]/, "Necessite 1 lettre")
    .matches(/[A-Z]/, "Necessite 1 majuscule ")
    .matches(/[1-9]/, "Necessite 1 nombre")
    .matches(/[@!?]/, "Necessite un caractère spécial")
    .min(8, "Minimum 8 ")
    .required("Ce champ est requis")
    .required("Ce champ est requis")
    .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas"),
  checkbox: yup
    .boolean()
    .oneOf([true], "Accepter les termes et les conditions")
    .required("Ce champ est requis"),
});

export const add_Car = yup.object({
  name: yup
    .string()
    .matches(/[a-z]/, "Necessite des lettres")
    .required("Ce champ est requis"),
  description: yup
    .string()
    .matches(/[a-z]/, "Necessite des lettres")
    .min(10, "Minimum 10 lettres ")
    .required("Ce champ est requis"),
  price: yup
    .number()
    .min(2, "Minimum 2 ")
    .max(1000, "Maximum 1000 "),
    image: yup.string()
});
