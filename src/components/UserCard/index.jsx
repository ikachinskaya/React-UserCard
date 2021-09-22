import { Component } from "react";
import Image from "./../Image";
import "./userCard.css";

class UserCard extends Component {
  render() {
    const { users } = this.props;

    return (
      <ul className="cardsContainer">
        {users.map((user) => (
          <li key={user.id} className="cardWrapper">
            <article className="userCard">
              <Image
                src={user.profilePicture}
                alt={user.firstName + " " + user.lastName}
              />
              <h2 className="cardName">
                {user.firstName || user.lastName
                  ? user.firstName + " " + user.lastName
                  : "Unknown"}
              </h2>
              <p className="cardDescription">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium quod impedit quae sit tempora nihil deleniti ratione
                sed praesentium id
              </p>
            </article>
          </li>
        ))}
      </ul>
    );
  }
}

export default UserCard;
