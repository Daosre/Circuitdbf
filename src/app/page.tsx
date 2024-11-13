import Footer from "@/Components/H.F/Footer";
import Header from "@/Components/H.F/Header";

const page = () => {
  return (
    <div className="bg-[#FEF4F4] flex flex-col items-center">
      <Header />
      <section className="text-[#212121] text-center p-2 mt-10 flex flex-col gap-2">
        <article className="">
          <p className="">
            Bienvenue sur le site du Circuit du bonheur ! Si vous souhaitez
            naviguer sur le site veuillez cliquer <a href="/Accueil" className="text-[#FD3131]">ici.</a>
          </p>
        </article>
        <article>
          <p>
            Pour vous connectez c'est <a href="/SignIn" className="text-[#FD3131]">ici.</a>
          </p>
          <p>Pour vous inscire c'est par <a href="/SignUp" className="text-[#FD3131]">ici.</a></p>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default page;
