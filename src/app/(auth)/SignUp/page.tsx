import Footer from '@/app/Components/H.F/Footer'
import Header from '@/app/Components/H.F/Header'
import React from 'react'
import "../../test.css";
import SignUp_Form from '@/app/Components/Form/SignUp_Form';

const signUp = () => {
  return (
    <div className='flex flex-col justify-center items-center fond_de_page'>
      <Header/>
      <SignUp_Form/>
      <Footer/>
    </div>
  )
}

export default signUp
