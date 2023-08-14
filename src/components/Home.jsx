import React from 'react'
import Form from "./Form";
const Home = () => {
  return (
<section className="bg-gray-900 text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Breakup With Your

        <span className="sm:block"> Landlord, Roommate, Barista </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
       Utilizing OpenAi's ChatGPT API, this app will generate cheeky
       little notes you should totally not use to breakup with someone. I mean, you can...but we are not responsible for the consequences.
      </p>
      <p className="mx-auto mt-4 max-w-xl sm:text-xs">
     * Actually using these letters to break up with someone may result in coffee burns, loss of security deposits, slashed tires, or worse.
      </p>

    </div>
  </div>
<Form />
</section>



  )
}

export default Home

