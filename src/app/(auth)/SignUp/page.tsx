"use client";
import SignUp_Form from "@/Components/Form/SignUp_Form";
import Footer from "@/Components/H.F/Footer";
import Header from "@/Components/H.F/Header";

const signUp = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[url('/bg.jpeg')] md:bg-no-repeat md:bg-cover md:bg-center lg:bg-no-repeat lg:bg-cover lg:bg-center">
      <Header />
      <SignUp_Form />
      <Footer />
    </div>
  );
};

export default signUp;
