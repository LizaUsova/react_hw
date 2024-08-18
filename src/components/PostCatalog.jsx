import React from "react";
import Post from "./Post";
import styles from "./styles.module.scss";

class PostCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: '',
            isLoading: true,
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => this.setState({ posts }))
            .catch((error) => this.setState({ error: error.message }))
            .finally(() => this.setState({ isLoading: false }));
    }

    render() {
        const { posts, error, isLoading } = this.state;

        if (error) {
            return <h1>Error: {error}</h1>;
        }

        return (
            <div className={styles.post}>
                <h1 className={styles.post_title}>Posts</h1>
                <hr/>
                {isLoading ? (
                    <h1 className={styles.load}>Loading...</h1>
                ) : (
                    <ul className={styles.post_list}>
                        {posts.map((post) => (
                            <Post key={post.id} {...post} />
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default PostCatalog;
