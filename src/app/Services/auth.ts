import axios from "axios";
import { toast } from "react-toastify";
import { signIn_Props, signUp_Props } from "../Utils/auth_type";

//Register
export async function signUp(authProps: signUp_Props) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/SignUp`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return axios
    .post(
      url,
      {
        email: authProps.email,
        firstName: authProps.firstName,
        lastName: authProps.lastName,
        password: authProps.password,
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      toast.error(e.response.data.message, {
        position: "top-right",
      });
      return e;
    });
}

//Login
export async function signIn(authProps: signIn_Props) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`;

	const axiosConfig = {
		headers: {
			"content-type": "application/json;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		},
	};
	return axios
		.post(
			url,
			{
				email: authProps.email,
				password: authProps.password,
			},
			axiosConfig,
		)
		.then((res) => {
			return res;
		})
		.catch((e) => {
			toast.error(e.response.data.message, {
				position: "top-center",
			});
			return e;
		});
}
