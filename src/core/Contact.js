import React from "react";
import Base from "../core/Base";

const Contact = () => {
  const contactForm = () => {
    return (
      <div className="row card shadow p-4">
        <div className="col-md-5 offset-sm-4 text-left">
          <div className="form-group">
            <input
              className="form-control shadow"
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="form-group">
            <input
              className="form-control shadow"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control shadow"
              type="text"
              placeholder="Message"
            />
          </div>
          <div className="text-center">
            <button className="btn btn-primary px-5 rounded">Submit</button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Base title="Contact Us" description="Connecting with us!">
      <p className="text-dark text-center">
        Email us with any questions or inquiries or call 518-387-9327. We would
        be happy to answer your questions and set up a meeting with you.
      </p>
      {contactForm()}
    </Base>
  );
};
export default Contact;
