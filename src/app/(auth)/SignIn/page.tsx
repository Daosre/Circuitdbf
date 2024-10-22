"use client";
import SignIn_Form from "@/Components/Form/SignIn_Form";
import Footer from "@/Components/H.F/Footer";
import Header from "@/Components/H.F/Header";
import "../../style.css";

const signIn = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[url('/bg.jpeg')] md:bg-no-repeat md:bg-cover md:bg-center lg:bg-no-repeat lg:bg-cover lg:bg-center">
      <Header />
      <h1 className="titre_connexion">Connexion</h1>
      <SignIn_Form />
      <Footer />
    </div>
  );
};

export default signIn;
