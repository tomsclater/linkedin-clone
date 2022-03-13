import { useEffect } from "react";
import Input from "./Input";

function Feed() {
    const [realtimePosts, setRealtimePosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("/api/posts", {
                method: "GET",
                headers: { 'Content-Type': "application/json" },
            });

            const responseData = await response.json();
            setRealtimePosts(responseData);
        };
    }, []);

    return (
        <div className="space-y-6 pb-24 max-w-lg">
            <Input />
            {/* {Posts} */}
            {/* {Hybrid} */}
        </div>
    );
}

export default Feed;