/* eslint-disable react/no-unescaped-entities */
"use client";
import Footer from "@/Components/H.F/Footer";
import Header from "@/Components/H.F/Header";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const Page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="bg-[#FEF4F4] flex flex-col items-center">
      <Header />
      <div className="w-full mt-4">
        <FaArrowLeft className="text-[#212121] cursor-pointer text-2xl ml-4" onClick={handleBack} />
      </div>
      <section className="text-[#212121] text-center p-4 md:w-96 lg:w-1/2">
        <h2 className="text-xl font-bold text-[#FD3131] m-2">
          Mentions L&eacute;gales :
        </h2>
        <em className="text-[16px]">
          Le site Circuit du Bonheur est &eacute;dit&eacute; par : Daorse &amp; Tech / Daorse :
          Circuit du Bonheur SARL Si&egrave;ge social : 123 Routes des Plaisirs, 75000
          Paris, France Numéro de téléphone : +33 1 23 45 67 89 Adresse e-mail :
          contact@cdb.com SIRET : 123 456 789 00012 Numéro de TVA
          intracommunautaire : FR12 3456789012 Directeur de la publication :
          D&acirc;orse
        </em>
      </section>
      <section className="text-[#212121] text-center p-4 md:w-96 lg:w-1/2">
        <h2 className="text-xl font-bold text-[#FD3131] m-2">
          Propri&eacute;t&eacute; intellectuelle :
        </h2>
        <em className="text-[16px]">
          L&rsquo;ensemble du contenu du site Circuit du Bonheur (textes, images,
          vid&eacute;os, graphiques, logos, ic&ocirc;nes, sons, logiciels, etc.) est la
          propri&eacute;t&eacute; exclusive de l&rsquo;&eacute;diteur ou de ses partenaires. Toute
          reproduction, repr&eacute;sentation, modification, publication ou adaptation
          de tout ou partie des &eacute;l&eacute;ments du site, quel que soit le moyen ou le
          proc&eacute;d&eacute; utilis&eacute;, est interdite, sauf autorisation &eacute;crite pr&eacute;alable.
          Toute utilisation non autoris&eacute;e du site ou de l&rsquo;un des &eacute;l&eacute;ments qu&rsquo;il
          contient sera consid&eacute;r&eacute;e comme constitutive d&rsquo;une contrefaçon et
          poursuivie conform&eacute;ment aux dispositions des articles L.335&ndash;2 et
          suivants du Code de la Propri&eacute;t&eacute; Intellectuelle. 4. Donn&eacute;es
          personnelles et cookies Donn&eacute;es personnelles : Conform&eacute;ment au
          R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD), nous vous
          informons que nous collectons et traitons vos donn&eacute;es personnelles
          dans le but de g&eacute;rer votre demande, d'am&eacute;liorer nos services et, le
          cas &eacute;ch&eacute;ant, de vous envoyer des offres commerciales. Finalit&eacute;s de
          traitement : gestion des commandes, newsletter, analyse de la
          fr&eacute;quentation du site. Dur&eacute;e de conservation des donn&eacute;es : les donn&eacute;es
          sont conserv&eacute;es pour une dur&eacute;e. Droits des
          utilisateurs : vous disposez d&rsquo;un droit d&rsquo;acc&egrave;s, de rectification, de
          suppression, et d&rsquo;opposition au traitement de vos donn&eacute;es
          personnelles. Pour exercer vos droits, veuillez envoyer un e&ndash;mail à :
          dpo@circuitdubonheur.com.
        </em>
      </section>
      <section className="text-[#212121] text-center p-4 md:w-96 lg:w-1/2">
        <h2 className="text-xl font-bold text-[#FD3131] m-2">Cookies :</h2>
        <em className="text-[16px]">
          Le site Circuit du Bonheur utilise des cookies pour am&eacute;liorer
          l&rsquo;exp&eacute;rience utilisateur, analyser le trafic et optimiser les services
          propos&eacute;s. Vous pouvez configurer vos pr&eacute;f&eacute;rences concernant les
          cookies dans les paramètres de votre navigateur. 5. Responsabilit&eacute;
          L&rsquo;&eacute;diteur du site Circuit du Bonheur s&rsquo;efforce de fournir des
          informations aussi pr&eacute;cises que possible. Cependant, il ne pourra être
          tenu responsable des omissions, des inexactitudes et des carences dans
          la mise à jour, qu&rsquo;elles soient de son fait ou du fait des tiers
          partenaires qui lui fournissent ces informations. Le site peut
          contenir des liens hypertextes vers d&rsquo;autres sites. Cependant, Circuit
          du Bonheur n&rsquo;a pas la possibilit&eacute; de v&eacute;rifier le contenu des sites
          ainsi visit&eacute;s et n&rsquo;assumera en cons&eacute;quence aucune responsabilit&eacute; de ce
          fait. 6. Conditions g&eacute;n&eacute;rales d&rsquo;utilisation (CGU) En acc&eacute;dant &agrave; ce
          site, vous acceptez les pr&eacute;sentes Conditions G&eacute;n&eacute;rales d&rsquo;Utilisation.
          L&rsquo;utilisateur du site s&rsquo;engage à respecter les règles de bonne
          conduite sur Internet et &agrave; ne pas r&eacute;aliser d'actes illicites via notre
          plateforme. 7. M&eacute;diation et règlement des litiges En cas de litige
          concernant un service ou un produit propos&eacute; par Circuit du Bonheur,
          vous pouvez recourir à une m&eacute;diation conventionnelle ou à tout autre
          mode alternatif de r&egrave;glement des diff&eacute;rends. Pour plus d&rsquo;informations,
          vous pouvez contacter notre m&eacute;diateur. 8. Droit applicable Les
          pr&eacute;sentes mentions l&eacute;gales sont r&eacute;gies par le droit français. En cas
          de litige, et &agrave; d&eacute;faut de r&eacute;solution amiable, les tribunaux français
          seront comp&eacute;tents.
        </em>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
