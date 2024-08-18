import Post from "./Post";
import {useState, useEffect} from "react";
import styles from "./style.module.scss";

function Posts() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => setPosts(posts))
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [])

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <div className={styles.post}>
            <h1 className={styles.post_title}>Posts</h1>
            <hr/>
            {isLoading ? (
                <h1 className={styles.load}>Loading...</h1>
            ):( <ul className={styles.post_list}>
                {posts.map((post) => (
                <Post key={post.id} {...post}/>
                ))}
                </ul>
            )}
        </div>
    );
}

export default Posts;