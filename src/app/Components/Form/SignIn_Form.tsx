"use client";
import "../Form/form_css.css";

const SignIn_Form = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 form_signIn">
      <label htmlFor="Email">Email :</label>
      <input
        type="email"
        className=" placeholder_style p-3"
        placeholder="Entrer l'email ici..."
      />
      <label htmlFor="Password">Mot de passe :</label>
      <input
        type="password"
        className="placeholder_style p-3"
        placeholder="Entrer vôtre mot de passe ici..."
      />
      <p className="password_missing">
        Mot de passe oublier ? Cliquez{" "}
        <a href="#" className="text-red-600">
          ici
        </a>
      </p>

      <button className="">Connexion</button>
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
