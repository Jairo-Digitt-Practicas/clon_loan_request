/** @format */

import Avatar from "@mui/material/Avatar";
import styles from "./UserAvatar.module.css";

const UserAvatar = () => {
    return (
        <Avatar
            className={styles.MuiAvatar}
            alt='User Name'
            src='/static/images/avatar/1.jpg'
        />
    );
};

export default UserAvatar;
