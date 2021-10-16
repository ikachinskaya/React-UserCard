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

  imageErrorHandler = () => {
    const { isError } = this.state;
    this.setState({ isError: !isError });
  };

  render() {
    const { src, alt, fullName } = this.props;
    const { isError } = this.state;
    return (
      <div className={styles.imgWrapper}>
        {src && !isError ? (
          <img
            className={styles.img}
            src={src}
            alt={alt}
            onError={this.imageErrorHandler}
          />
        ) : (
          <div
            style={{ backgroundColor: stc(`${fullName}`.trim()) }}
            className={styles.initials}
          >
            {`${fullName}`
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
  fullName: PropTypes.string,
};
export default Image;
