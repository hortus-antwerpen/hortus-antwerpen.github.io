import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="grid-img-left">
          <div className="img-left">
            <img src="img/boom.jpeg" alt="img" height="300" width="450" />
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
            <img src="img/kale_boom.jpeg" alt="img" height="300" width="450" />
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
            <img src="img/stormschade.jpeg" alt="img" height="300" width="450" />
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
            <img src="img/tuin.jpeg" alt="img" height="300" width="450" />
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
