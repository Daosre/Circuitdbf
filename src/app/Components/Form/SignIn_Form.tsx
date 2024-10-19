"use client";
import ReCAPTCHA from "react-google-recaptcha";
import "../Form/form_css.css";

const SignIn_Form = () => {
  const onChange = () => {};
  return (
    <div className="flex flex-col justify-center gap-2 items-center form_signIn rounded">
      <label htmlFor="Email" className="flex flex-col">
        Email :
        <input
          type="email"
          className=" placeholder_style p-3"
          placeholder="Entrer l'email ici..."
        />
      </label>
      <label htmlFor="Password" className="flex flex-col">
        Mot de passe :
        <input
          type="password"
          className="placeholder_style p-3"
          placeholder="Entrer vôtre mot de passe ici..."
        />
      </label>
      <p className="password_missing">
        Mot de passe oublier ? Cliquez{" "}
        <a href="#" className="text-red-600">
          ici
        </a>
      </p>
      <ReCAPTCHA
        sitekey="6LftXGYqAAAAACtSX1SfVbewRgE-svolY9S_SWtu"
        onChange={onChange}
      />
      <button className="btn_Form">Connexion</button>
      <p className="password_missing">
        Vous êtes pas inscrit ? Cliquer{" "}
        <a href="#" className="text-red-600">
          ici
        </a>
      </p>
    </div>
  );
};

export default SignIn_Form;
