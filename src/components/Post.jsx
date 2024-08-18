import React from "react";
import styles from './styles.module.scss';

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, title, userId, body } = this.props;

        return (
            <li className={styles.post}>
                <small>{id}</small>
                <h2>{title}</h2>
                <p>{body}</p>
                <h3>User ID: {userId}</h3>
            </li>
        );
    }
}

export default Post;
