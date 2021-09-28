import { Component } from "react";
import PropTypes from "prop-types";
import Image from "./../Image";
import Links from "./../Links";
import styles from "./UserCard.module.css";

class UserCard extends Component {
  render() {
    const {
      user,
      user: { firstName, lastName, profilePicture },
    } = this.props;
    const fullName = `${firstName} ${lastName}`.trim();
    return (
      <article className={styles.userCard}>
        <Image src={profilePicture} alt={fullName} user={user} />
        <h2 className={styles.cardName}>
          {firstName || lastName ? fullName : "Unknown"}
        </h2>
        <p className={styles.cardDescription}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          quod impedit quae sit tempora nihil deleniti ratione sed praesentium
          id
        </p>
        <Links user={user} />
      </article>
    );
  }
}

export const obj = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  profilePicture: PropTypes.string,
};

UserCard.propTypes = {
  user: PropTypes.shape(obj),
};
export default UserCard;
