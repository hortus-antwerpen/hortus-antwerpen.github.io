import React from "react";
import { Form, Field } from "react-final-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  onSubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <>
        <div className="footer_wrapper">
          <div className="hide-on-mobile">
            <Form
              onSubmit={this.onSubmit}
              render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit} className="form">
                  <Field className="line-input" id="name-input" name="name" component="input" type="text" placeholder="Naam" />
                  <Field
                    className="line-input"
                    id="email-input"
                    name="email"
                    component="input"
                    type="text"
                    placeholder="E-Mailadres"
                  />
                  <Field className="area-input" id="message-input" name="message" component="textarea" placeholder="Bericht" />
                  <button className="button-form" type="submit" disabled={submitting || pristine}>
                    Verstuur
                  </button>
                </form>
              )}
            />
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
              <FontAwesomeIcon icon={faFacebookF} size="2x" className="icon facebook" />
              <FontAwesomeIcon icon={faInstagram} size="2x" className="icon instagram" />
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="icon linkedin" />
              <FontAwesomeIcon icon={faTwitter} size="2x" className="icon twitter" />
            </div>
          </div>
        </div>
        <div className="sr-footer">Website by SR Technologies - © 2019</div>
      </>
    );
  }
}

export default Footer;
