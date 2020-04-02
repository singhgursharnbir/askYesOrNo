import React from "react";

class questionComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-6">
            <input
              onInput={this.props.setInputValue}
              type="text"
              className="w-100 rounded p-2 font-weight-bold "
              placeholder="Type your question here"
            />
          </div>
          <div className="col-2 pt-1">
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
        <div className="row mt-2">
          <div className="col-2"></div>
          <div className="col-6">
            {this.props.imageUrl ? (
              <img
                style={{ maxHeight: "350px" }}
                className="w-100 img-fluid"
                src={this.props.imageUrl}
                alt="giphy"
              />
            ) : (
              ""
            )}
          </div>
          <div className="col-2 ">
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
