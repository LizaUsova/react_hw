import styles from './style.module.scss';
function Post(props) {
    const {id, title, userId, body} = props;

    return (
        <li className={styles.post}>
            <small>{id}</small>
            <h2>{title}</h2>
            <p>{body}</p>
            <h3>User ID: {userId}</h3>
        </li>
    );
};

export default Post;