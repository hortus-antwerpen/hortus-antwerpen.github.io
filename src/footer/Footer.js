import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      status: ""
    };
  }

  onSubmit(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <>
        <div className="footer_wrapper">
          <div className="hide-on-mobile">
            <form onSubmit={this.onSubmit} action="https://formspree.io/mnekebrx" method="POST" className="form">
              <input className="line-input" id="name-input" name="name" type="text" placeholder="Naam" />
              <input
                className="line-input"
                id="email-input"
                name="email"
                component="input"
                type="text"
                placeholder="E-Mailadres"
              />
              <textarea className="area-input" id="message-input" name="message" placeholder="Bericht" />
              {status === "SUCCESS" ? (
                <div className="message">
                  <p>
                    <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: "10px" }} />
                    &#9;Uw aanvraag werd goed ontvangen!
                  </p>
                </div>
              ) : (
                <button className="button-form" type="submit">
                  Verstuur
                </button>
              )}
              {status === "ERROR" && <p>Er is iets misgegaan!</p>}
            </form>
            )} />
          </div>
          <div className="info">
            <div className="info-left">
              <div className="part-1">
                <p>Wommelgemsesteenweg 42</p>
                <p>2531 Vremde</p>
              </div>
              <div className="part-2">
                <p>+32 (0) 0477 29 89 09</p>
              </div>
              <div className="part-3">
                <p>BTW BE0734.733.131</p>
                <p>KVK 0734.733.131</p>
              </div>
            </div>
            <div className="divider" />
            <div className="socials">
              <a href="https://www.facebook.com/hortus.antwerpen/" target="_blank" rel="noopener noreferrer" id="facebook">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a href="https://www.instagram.com/hortus.antwerpen/" target="_blank" rel="noopener noreferrer" id="instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="sr-footer">Website by SR Technologies - © 2019</div>
      </>
    );
  }
}

export default Footer;
