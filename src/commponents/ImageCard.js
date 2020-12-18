import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //console.log(this.imageRef);
    // 왜 clientHeight를 제대로 가져오지 못하고 0으로만 찍힐까?
    // 이미지가 로드 되지 않았기 때문에..
    //console.log(this.imageRef.current.clientHeight);
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  setSpans = () => {
    console.log(this.imageRef.current.clientHeight); //load 완료후 이미지 clientHeight 를 정상적으로 가져온다.
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
