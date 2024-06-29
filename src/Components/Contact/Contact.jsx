import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let&apos;s talk</h1>
          <p>
            I am available for work. Connect with me via and call in to my
            account. I will answer all your questions and offer my best. Thank
            you.
          </p>
          <div className="contac-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>alter@daringen.com</p>
            </div>
            <div className="contact-detail">
              <img src="" alt="" />
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>123 456 7890</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>California, USA</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
