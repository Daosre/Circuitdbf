import Footer from "@/Components/H.F/Footer";
import Header from "@/Components/H.F/Header";

const Page = () => {
  return (
    <div className="bg-[#FEF4F4] flex flex-col items-center">
      <Header />
      <section className="text-[#212121] text-center p-2 mt-10 flex flex-col gap-2">
        <article className="text-center flex flex-col items-center">
          <p className="w-[300px] md:w-[550px] lg:w-[650px]">
            Bienvenue sur Circuit du Bonheur ! Plongez au cœur de l&rsquo;adr&eacute;naline
            et du plaisir avec Circuit du Bonheur, votre destination ultime pour
            vivre des sensations fortes sur un circuit renomm&eacute;. Que vous soyez
            passionn&eacute; de vitesse ou amateur de conduite d&rsquo;exception, nous vous
            offrons l&rsquo;opportunit&eacute; de prendre le volant des voitures les plus
            prestigieuses. Profitez de notre s&eacute;lection exclusive de v&eacute;hicules de
            sport et de luxe, conçus pour sublimer chaque virage et chaque ligne
            droite. Que ce soit pour un moment inoubliable, un d&eacute;fi personnel ou
            un cadeau d&rsquo;exception, Circuit du Bonheur est là pour transformer
            vos r&ecirc;ves en r&eacute;alit&eacute;.
          </p>
          <em className="text-sm mt-5">
            Si vous souhaitez naviguer sur le site veuillez cliquer{" "}
            <a href="/Accueil" className="text-[#FD3131]">
              ici.
            </a>
          </em>
        </article>
        <article className="text-sm">
          <em>
            Pour vous connectez c&rsquo;est{" "}
            <a href="/SignIn" className="text-[#FD3131]">
              ici.
            </a>
          </em>
          <em>
            Pour vous inscire c&rsquo;est par{" "}
            <a href="/SignUp" className="text-[#FD3131]">
              ici.
            </a>
          </em>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
