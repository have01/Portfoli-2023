import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
import { AnimationOnScroll } from "react-animation-on-scroll";
function Contact() {
  return (
    <AnimationOnScroll animateIn="animate__bounceIn">
      <div className="contact">
        <Separator />
        <label className="section-title">Contact</label>
        <div className="contact-container">
          <div className="contact-left">
            <p>Want to get in touch? Contact me on any of the platform</p>
            <SocialContact />
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}

export default Contact;
