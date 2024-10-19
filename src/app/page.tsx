import SignIn_Form from "./Components/Form/SignIn_Form";
import Header from "./Components/H.F/Header";
import "../app/test.css";
import Footer from "./Components/H.F/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center fond_de_page">
      <Header/>
      <h1 className="titre_connexion">Connexion</h1>
      <SignIn_Form />
      <Footer/>
    </div>
  );
}
