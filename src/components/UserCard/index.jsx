import { Component } from "react";
import Image from "./../Image";
import styles from "./UserCard.module.css";

class UserCard extends Component {
  render() {
    const {
      user: { firstName, lastName, profilePicture },
    } = this.props;
    const fullName = `${firstName} ${lastName}`.trim();
    return (
      <article className={styles.userCard}>
        <Image src={profilePicture} alt={fullName} />
        <h2 className={styles.cardName}>
          {firstName || lastName ? fullName : "Unknown"}
        </h2>
        <p className={styles.cardDescription}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          quod impedit quae sit tempora nihil deleniti ratione sed praesentium
          id
        </p>
      </article>
    );
  }
}

export default UserCard;
