import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Description from "./Components/description";
import QuestionComponent from "./Components/questionComponent";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.mainDiv = React.createRef();
    this.state = {
      active: false,
      yesOrNo: "",
      imageUrl: "",
      value: "",
      loading: true
    };
  }
  rotateElement = () => {
    this.setState(
      (state, props) => ({
        active: true,
        yesOrNo: "",
        imageUrl: ""
      }),
      () => {
        this.removeClass();
        this.getRandom();
      }
    );
  };
  removeClass = () => {
    setTimeout(() => {
      this.setState((state, props) => ({
        active: false
      }));
    }, 2000);
  };

  getRandom = () => {
    let arr = ["Yes", "No"];
    setTimeout(() => {
      let thisRandom = arr[Math.floor(Math.random() * arr.length)];
      this.setState({ yesOrNo: thisRandom }, this.fetchImage(thisRandom));
    }, 2000);
  };
  fetchImage = thisRandom => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${thisRandom}&api_key=R1xlrTlzaEYYQvoJVDEmft0ortyXKIP1`
    )
      .then(res => res.json())
      .then(photoData => {
        let dataArray = photoData.data;
        let pickRandom =
          dataArray[Math.floor(Math.random() * dataArray.length)];
        this.setState({
          imageUrl: pickRandom.images.original.url
        });
      });
  };

  setInputValue = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        {/* <Loader /> */}
        <div className="row h-100  ">
          <div
            ref={this.mainDiv}
            className={
              this.state.active
                ? "col-md-12 col-sm-8 m-4 mainBackground  rotationClass"
                : "col-md-12 col-sm-8 m-4 mainBackground "
            }
          >
            <Header />
            <Description />
            <QuestionComponent
              className="row"
              yesOrNo={this.state.yesOrNo}
              rotateElement={this.rotateElement}
              imageUrl={this.state.imageUrl}
              setInputValue={this.setInputValue}
              inputValue={this.state.value}
            />
            <div className="mt-2">{this.state.imageUrl ? <Footer /> : ""}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
