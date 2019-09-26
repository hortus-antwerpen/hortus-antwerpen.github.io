import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="grid-img-left">
          <div className="img-left">
            <img src="img.png" alt="img" />
          </div>
          <div className="txt-right">
            <h1>1st title</h1>
            <p>
              This will be some text. This will be some text. This will be some text. This will be some text. This will be some
              text. This will be some text. This will be some text. This will be some text. This will be some text. This will be
              some text. This will be some text.
            </p>
          </div>
        </div>
        <div className="grid-img-right">
          <div className="img-right">
            <img src="img.png" alt="img" />
          </div>
          <div className="txt-left">
            <h1>2nd title</h1>
            <p>
              This will be some text. This will be some text. This will be some text. This will be some text. This will be some
              text. This will be some text. This will be some text. This will be some text. This will be some text. This will be
              some text. This will be some text.
            </p>
          </div>
        </div>
        <div className="grid-img-left">
          <div className="img-left">
            <img src="img.png" alt="img" />
          </div>
          <div className="txt-right">
            <h1>3rd title</h1>
            <p>
              This will be some text. This will be some text. This will be some text. This will be some text. This will be some
              text. This will be some text. This will be some text. This will be some text. This will be some text. This will be
              some text. This will be some text.
            </p>
          </div>
        </div>
        <div className="grid-img-right">
          <div className="img-right">
            <img src="img.png" alt="img" />
          </div>
          <div className="txt-left">
            <h1>4th title</h1>
            <p>
              This will be some text. This will be some text. This will be some text. This will be some text. This will be some
              text. This will be some text. This will be some text. This will be some text. This will be some text. This will be
              some text. This will be some text.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
