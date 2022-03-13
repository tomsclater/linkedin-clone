import { useState } from "react";

function Form() {
    const [input, setInput] = useState("")

    console.log(input);

  return <form className=" flex flex-col relative">
        <textarea 
            rows="4" 
            placeholder="What do you want to talk about?"
            className="bg-transparent focus:outline-none dark:placeholder-white/75"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <div>
        <button
                  className="text-blue-700 dark:text-white font-semibold rounded border border-blue-700 px-5 py-1.5 transition-all hover:border-2 inputButton"
                //   onClick=""
                >
                  Add hashtag
        </button>
        </div>
  </form>;
}

export default Form;