/* eslint-disable react/no-unescaped-entities */
"use client";
import Footer from "@/Components/H.F/Footer";
import Header from "@/Components/H.F/Header";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const page = () => {
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
          Mentions Légales :
        </h2>
        <em className="text-[16px]">
          Le site Circuit du Bonheur est édité par : Daorse & Tech / Daorse :
          Circuit du Bonheur SARL Siège social : 123 Routes des Plaisirs, 75000
          Paris, France Numéro de téléphone : +33 1 23 45 67 89 Adresse e-mail :
          contact@cdb.com SIRET : 123 456 789 00012 Numéro de TVA
          intracommunautaire : FR12 3456789012 Directeur de la publication :
          Dâorse
        </em>
      </section>
      <section className="text-[#212121] text-center p-4 md:w-96 lg:w-1/2">
        <h2 className="text-xl font-bold text-[#FD3131] m-2">
          Propriété intellectuelle :
        </h2>
        <em className="text-[16px]">
          L’ensemble du contenu du site Circuit du Bonheur (textes, images,
          vidéos, graphiques, logos, icônes, sons, logiciels, etc.) est la
          propriété exclusive de l'éditeur ou de ses partenaires. Toute
          reproduction, représentation, modification, publication ou adaptation
          de tout ou partie des éléments du site, quel que soit le moyen ou le
          procédé utilisé, est interdite, sauf autorisation écrite préalable.
          Toute utilisation non autorisée du site ou de l'un des éléments qu'il
          contient sera considérée comme constitutive d'une contrefaçon et
          poursuivie conformément aux dispositions des articles L.335-2 et
          suivants du Code de la Propriété Intellectuelle. 4. Données
          personnelles et cookies Données personnelles : Conformément au
          Règlement Général sur la Protection des Données (RGPD), nous vous
          informons que nous collectons et traitons vos données personnelles
          dans le but de gérer votre demande, d'améliorer nos services et, le
          cas échéant, de vous envoyer des offres commerciales. Finalités de
          traitement : gestion des commandes, newsletter, analyse de la
          fréquentation du site. Durée de conservation des données : les données
          sont conservées pour une durée de [spécifier la durée]. Droits des
          utilisateurs : vous disposez d'un droit d'accès, de rectification, de
          suppression, et d'opposition au traitement de vos données
          personnelles. Pour exercer vos droits, veuillez envoyer un e-mail à :
          dpo@circuitdubonheur.com.
        </em>
      </section>
      <section className="text-[#212121] text-center p-4 md:w-96 lg:w-1/2">
        <h2 className="text-xl font-bold text-[#FD3131] m-2">Cookies :</h2>
        <em className="text-[16px]">
          Le site Circuit du Bonheur utilise des cookies pour améliorer
          l’expérience utilisateur, analyser le trafic et optimiser les services
          proposés. Vous pouvez configurer vos préférences concernant les
          cookies dans les paramètres de votre navigateur. 5. Responsabilité
          L’éditeur du site Circuit du Bonheur s’efforce de fournir des
          informations aussi précises que possible. Cependant, il ne pourra être
          tenu responsable des omissions, des inexactitudes et des carences dans
          la mise à jour, qu’elles soient de son fait ou du fait des tiers
          partenaires qui lui fournissent ces informations. Le site peut
          contenir des liens hypertextes vers d’autres sites. Cependant, Circuit
          du Bonheur n’a pas la possibilité de vérifier le contenu des sites
          ainsi visités et n’assumera en conséquence aucune responsabilité de ce
          fait. 6. Conditions générales d’utilisation (CGU) En accédant à ce
          site, vous acceptez les présentes Conditions Générales d'Utilisation.
          L'utilisateur du site s'engage à respecter les règles de bonne
          conduite sur Internet et à ne pas réaliser d'actes illicites via notre
          plateforme. 7. Médiation et règlement des litiges En cas de litige
          concernant un service ou un produit proposé par Circuit du Bonheur,
          vous pouvez recourir à une médiation conventionnelle ou à tout autre
          mode alternatif de règlement des différends. Pour plus d’informations,
          vous pouvez contacter notre médiateur. 8. Droit applicable Les
          présentes mentions légales sont régies par le droit français. En cas
          de litige, et à défaut de résolution amiable, les tribunaux français
          seront compétents.
        </em>
      </section>
      <Footer />
    </div>
  );
};

export default page;
