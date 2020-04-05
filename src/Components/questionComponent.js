import React from "react";

class questionComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="row ">
          <div className="col-md-3"></div>
          <div className="col-md-6 col-sm-12">
            <input
              onInput={this.props.setInputValue}
              type="text"
              className="w-100 rounded p-2 font-weight-bold "
              placeholder="Type your question here"
            />
          </div>
          <div className="col-md-3 col-sm-12 pt-2 text-mobile-right">
            <button
              disabled={this.props.inputValue ? "" : "disabled"}
              className="btn-primary btn"
              onClick={this.props.rotateElement}
              title="Enter Question then click send"
            >
              Send
            </button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-3"></div>
          <div className="col-md-6 col-sm-8">
            {this.props.imageUrl ? (
              <img
                className="w-100 img-responsive img-fluid image300"
                src={this.props.imageUrl}
                alt="giphy"
              />
            ) : (
              <img
                className="w-100 img-responsive img-fluid image300"
                src="https://media.giphy.com/media/l3DdrXKGnq2RdEnde/giphy.gif"
                alt="giphy"
              />
            )}
          </div>
          <div className="col-md-3 col-sm-2 ">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <h1
                  className={
                    this.props.yesOrNo === "No" ? "text-danger" : "text-success"
                  }
                >
                  {this.props.yesOrNo}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default questionComponent;
