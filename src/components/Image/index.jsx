import { Component } from "react";

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
      <div className="imgWrapper">
        {src !== null && !isError ? (
          <img
            className="img"
            src={src}
            alt={alt}
            onError={this.imageHandler}
          />
        ) : (
          <div className="initials">Unknown</div>
        )}
      </div>
    );
  }
}

export default Image;
