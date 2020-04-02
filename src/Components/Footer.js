import React from "react";
import giphyLogo from "../giphyLogo.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="row p-2 w-100">
        <div className="col-md-6">
          <small className="footer-copyright text-left text-white text-small font-weight-bold py-3">
            Copyright © Gursharnbir Singh 2020
          </small>
        </div>
        <div className="col-md-6 text-right">
          <small className="text-white text-right ">GIFs are: </small>
          <img className=" img-fluid" src={giphyLogo} alt="giphylogo"></img>
        </div>
      </div>
    );
  }
}

export default Footer;
