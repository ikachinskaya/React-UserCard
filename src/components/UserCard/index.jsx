import { Component } from "react";
import Image from "./../Image";
import "./userCard.css";

class UserCard extends Component {
  render() {
    const {
      user: { firstName, lastName, profilePicture },
    } = this.props;
    const fullName = `${firstName} ${lastName}`.trim();
    return (
      <article className="userCard">
        <Image src={profilePicture} alt={fullName} />
        <h2 className="cardName">
          {firstName || lastName ? fullName : "Unknown"}
        </h2>
        <p className="cardDescription">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          quod impedit quae sit tempora nihil deleniti ratione sed praesentium
          id
        </p>
      </article>
    );
  }
}

export default UserCard;
