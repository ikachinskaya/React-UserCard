import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Links.module.css";
import facebook from "./../../facebook.png";
import instagram from "./../../instagram.png";
import twitter from "./../../twitter.png";

const SUPPORTED_SOCIAL_NETWORKS = new Map([
  ["www.instagram.com", instagram],
  ["twitter.com", twitter],
  ["www.facebook.com", facebook],
]);

class Links extends Component {
  render() {
    const {
      user: { id, contacts },
    } = this.props;

    const linksList = contacts.map((contact) => {
      const url = new URL(contact);
      let imgSrc;
      SUPPORTED_SOCIAL_NETWORKS.has(url.host)
        ? (imgSrc = SUPPORTED_SOCIAL_NETWORKS.get(url.host))
        : (imgSrc = "default.png");

      return (
        <a
          key={`${id}-${url.host}`}
          className={styles.link}
          href={contact}
          target="_blank"
          rel="noreferrer"
        >
          <img className={styles.imgLink} src={imgSrc} alt={url.host} />
        </a>
      );
    });
    return (
      <>
        <div className={styles.linkWrapper}>{linksList}</div>
      </>
    );
  }
}

Links.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Links;
