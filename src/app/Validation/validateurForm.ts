import * as yup from "yup";

export const schema = yup.object({
	firstName: yup.string().required("Required field"),
	lastName: yup.string().required("Required field"),
	email: yup.string().email("Email valid").required(),
	password: yup
		.string()
		.matches(/[a-z]/, "You need one letter")
		.matches(/[A-Z]/, "You need one capital letter ")
		.matches(/[1-9]/, "You need one number")
		.matches(/[@!?]/, "You need one special character")
		.min(8, "Minimum 8 ")
		.required("Required field")
		.required("Required field"),
});
