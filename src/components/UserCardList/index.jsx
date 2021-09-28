import { Component } from "react";
import PropTypes from "prop-types";
import UserCard, { obj } from "./../UserCard";
import styles from "./UserCardList.module.css";

class UserCardList extends Component {
  render() {
    const { users } = this.props;
    return (
      <ul className={styles.cardsContainer}>
        {users.map((user) => (
          <li key={user.id} className={styles.cardWrapper}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    );
  }
}

UserCardList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(obj)),
};
export default UserCardList;
