import { Component } from "react";
import styles from "./Image.module.css"

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
    const { src, alt } = this.props;
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
          <div className={styles.initials}>Unknown</div>
        )}
      </div>
    );
  }
}

export default Image;
