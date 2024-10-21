/* eslint-disable react/no-unescaped-entities */
"use client";
import { signUp_Props } from "@/Utils/auth_type";
import { schema } from "@/Validation/validateurForm";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ErrorMsg from "../Error/Error";
import "../Form/form_css.css";
import { signUp } from "@/Services/auth";
const SignUp_Form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUp_Props>({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<signUp_Props> = (data) => {
    signUp(data)
      .then((res) => {
        if (res.status === 403) {
          toast.error("Email Already Taken");
        }
        if (res.status === 201) {
          toast.success("Register Successfully");
          push("/SignIn");
        }
      })
      .catch((e) => toast.error(e.response.data.message));
  };
  return (
    <div className="flex items-center flex-col w-full">
      <h1 className="text-[32px] text-center m-4 title text-[#212121]">
        Inscription
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-4 p-4 items-center form_SignUp rounded md:w-96 lg:w-[600px]"
      >
        <label htmlFor="firstName" className="label_style">
          Prénom :
          <input
            type="text"
            id="firstName"
            placeholder="Entrer vôtre prénom ici.."
            {...register("firstName", { required: true })}
            className="placeholder_style"
          />
          {errors.firstName && <ErrorMsg error={"prénom"} />}
        </label>
        <label htmlFor="lastName" className="label_style">
          Nom :
          <input
            type="text"
            id="lastName"
            placeholder="Entrer vôtre nom ici.."
            {...register("lastName", { required: true })}
            className="placeholder_style"
          />
          {errors.lastName && <ErrorMsg error={"nom"} />}
        </label>
        <label htmlFor="email" className="label_style">
          Email :
          <input
            type="email"
            id="email"
            placeholder="Entrer vôtre email ici.."
            {...register("email", { required: true })}
            className="placeholder_style"
          />
          {errors.email && <ErrorMsg error={"email"} />}
        </label>
        <label htmlFor="password" className="label_style">
          Mot de passe :
          <input
            type="password"
            id="password"
            placeholder="Entrer vôtre mot de passe ici.."
            {...register("password", { required: true })}
            className="placeholder_style"
          />
          {errors.password && <ErrorMsg error={"mot de passe"} />}
        </label>
        <label htmlFor="confirm_password" className="label_style">
          Confirmation mot de passe :
          <input
            type="password"
            id="confirm_password"
            placeholder="Confirmer vôtre mot de passe ici.."
            className="placeholder_style"
            {...register("confirm_password")}
          />
          <p className="text-[12px] mt-2 text-[#fd3131]">
            {errors.confirm_password?.message}
          </p>
        </label>
        <label htmlFor="" className="text-center m-2 text-sm font_family">
          <input type="checkbox" className="mr-2" {...register("checkbox")} />
          J'accepte les termes et conditions
        </label>
        <p className="text-[12px] text-[#fd3131]">{errors.checkbox?.message}</p>
        <button type="submit" className="btn_Form">
          S'inscrire
        </button>
        <p className="text-[12px]">
          Vous êtes déjà inscrit ? Cliquer{" "}
          <Link href={"#"} className="text-[#fd3131]">
            ici
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp_Form;
