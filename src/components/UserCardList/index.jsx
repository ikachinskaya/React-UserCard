import { Component } from "react";
import UserCard from "./../UserCard";
import "./../UserCard/userCard.css";

class UserCardList extends Component {
  render() {
    const { users } = this.props;
    return (
      <ul className="cardsContainer">
        {users.map((user) => (
          <li key={user.id} className="cardWrapper">
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    );
  }
}

export default UserCardList;
