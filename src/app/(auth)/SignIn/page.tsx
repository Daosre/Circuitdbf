import SignIn_Form from "@/app/Components/Form/SignIn_Form";
import Footer from "@/app/Components/H.F/Footer";
import Header from "@/app/Components/H.F/Header";
import "../../test.css";

const signIn = () => {
  return (
    <div className="flex flex-col justify-center items-center fond_de_page">
      <Header />
      <h1 className="titre_connexion">Connexion</h1>
      <SignIn_Form />
      <Footer />
    </div>
  );
};

export default signIn;
