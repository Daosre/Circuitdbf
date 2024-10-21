"use client";
import { signIn_Props } from "@/Utils/auth_type";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ErrorMsg from "../Error/Error";
import "../Form/form_css.css";
import { signIn } from "@/Services/auth";

const SignIn_Form = () => {
  const { push } = useRouter();
  const [validate, setValidate] = useState<string>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onChange(value: any) {
    setValidate(value);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signIn_Props>();
  const onSubmit: SubmitHandler<signIn_Props> = (data) => {
    if (validate)
      signIn(data)
        .then((res) => {
          window.localStorage.setItem("token", res.data.token.access_token);
          window.localStorage.setItem("Role", res.data.role.id);
          toast.success("Login Successful ✅", {
            position: "top-center",
            autoClose: 1500,
          });
          setTimeout(() => {
            push("/SignUp");
          }, 1500);
        })
        .catch((e) => toast(e));
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-2 items-center form_signIn rounded p-4 md:w-96 lg:w-[600px]"
    >
      <label htmlFor="Email" className="flex flex-col items-center">
        Email :
        <input
          type="email"
          id="email"
          className=" placeholder_style p-3"
          placeholder="Entrer l'email ici..."
          {...register("email", { required: true })}
        />
        {errors.email && <ErrorMsg error={"email"} />}
      </label>
      <label htmlFor="Password" className="flex flex-col items-center">
        Mot de passe :
        <input
          type="password"
          id="password"
          className="placeholder_style p-3"
          placeholder="Entrer vôtre mot de passe ici..."
          {...register("password", { required: true })}
        />
        {errors.password && <ErrorMsg error={"mot de passe"} />}
      </label>
      <p className="password_missing">
        Mot de passe oublier ? Cliquez{" "}
        <Link href="#" className="text-red-600">
          ici
        </Link>
      </p>
      <div>
        <ReCAPTCHA
          sitekey={`${process.env.NEXT_PUBLIC_API_CAPTCHA_KEY}`}
          onChange={onChange}
        />
        {!validate && (
          <p className="text-[#fd3131] text-[12px] text-center">
            Nécessite la validation du CAPTCHA
          </p>
        )}
      </div>
      <button type="submit" className="btn_Form">
        Connexion
      </button>
      <p className="password_missing">
        Vous êtes pas inscrit ? Cliquer{" "}
        <Link href="#" className="text-red-600">
          ici
        </Link>
      </p>
    </form>
  );
};

export default SignIn_Form;
