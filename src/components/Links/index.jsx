import { Component } from "react";
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
      if (SUPPORTED_SOCIAL_NETWORKS.has(url.host)) {
        imgSrc = SUPPORTED_SOCIAL_NETWORKS.get(url.host);
      } else {
        imgSrc = "default.png";
      }
      return (
        <a
          key={id}
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

export default Links;
