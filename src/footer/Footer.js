import React from "react";
import { Form, Field } from "react-final-form";

class Footer extends React.Component {
  onSubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <>
        <div className="footer_wrapper">
          <div>
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
            <p>Contactinfo</p>
          </div>
        </div>
        <div className="sr-footer">Website by SR Technologies - © 2019</div>
      </>
    );
  }
}

export default Footer;
