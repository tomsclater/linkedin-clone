import { useSession } from "next-auth/react";
import { useState } from "react";

function Form() {
    const [input, setInput] = useState("")
    const { data: session } = useSession();

    console.log(input);

    const uploadPost = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                input: input,
                username: session.user.name,
                email: session.user.email,
                userImg: session.user.image,
                createdAt: new Date().toString()
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })

        const responseData = await response.json();

        setModalOpen(false);
    };

    const addHashtag = async (e) => {
        setInput(e.target.value + "#");
        e.preventDefault();
    };

    return <form className=" flex flex-col relative space-y-2 text-black/80 dark:text-white/75">
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
                    onClick={addHashtag}
                    >
                    Add hashtag
            </button>
            </div>

            <button 
                className="absolute bottom-0 right-0 font-medium bg-blue-400 hover:bg-blue-500 disabled:text-black/40 disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1"
                type="submit"
                onClick={uploadPost}
                disabled={!input.trim()}
            >
                Post
            </button>
    </form>;
}

export default Form;