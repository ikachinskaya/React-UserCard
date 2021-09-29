import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Image.module.css";

const stc = require("string-to-color");

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  imageHandler = () => {
    const { isError } = this.state;
    this.setState({ isError: !isError });
  };

  render() {
    const {
      src,
      alt,
      user: { firstName, lastName },
    } = this.props;
    const { isError } = this.state;
    return (
      <div className={styles.imgWrapper}>
        {src !== null && !isError ? (
          <img
            className={styles.img}
            src={src}
            alt={alt}
            onError={this.imageHandler}
          />
        ) : (
          <div
            style={{ backgroundColor: stc(`${firstName} ${lastName}`.trim()) }}
            className={styles.initials}
          >
            {`${firstName} ${lastName}`
              .trim()
              .split(" ")
              .map((word) => word[0])
              .join(" ")}
          </div>
        )}
      </div>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};
export default Image;
