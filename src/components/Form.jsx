import React, { useState } from "react";
import axios from "axios";
export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };
return (
<body>
<section className="bg-gray-50">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
Who do you want to breakup with and if applicable, why?      </h2>

    </div>

    <div className="mx-auto mt-8 max-w-xl">
      <form action="#" className="sm:flex sm:gap-4" onSubmit={handleSubmit}>
        <div className="sm:flex-1">
          <label htmlFor="text" className="sr-only">prompt</label>

          <input
            type="text"
            placeholder="My girlfriend's cat lumps because he ate my sock"
            className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
            value={prompt}
            onChange={handlePrompt}
          />
        </div>

        <button
          type="submit"
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
        >
          <span className="text-sm font-medium"> Write My Letter </span>

          <svg
            className="h-5 w-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </form>

    </div>
  </div>
</section>

{/* <div className="mt-1 text-sm text-gray-700">{response ? response: "Nothing has been asked"}</div> */}


<article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
  <div className="flex items-start sm:gap-8 justify-center mx-4">
    <div>
      <p className="mt-4 text-lg font-medium sm:text-xl mx-8 pb-8">
        {response ? response: "Nothing has been asked"}
      </p>

    </div>
  </div>
</article>

</body>

   )
}
