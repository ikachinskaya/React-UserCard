import { Component } from "react";
import UserCard from "./../UserCard";
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

export default UserCardList;
