import { useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    document.title = "CONTACT | AIM STUDIO";
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_phhfhyx",
        "template_ttpvk5h",
        form.current,
        "rRtucWrPZEGw_Rk2J"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <section className='contact'>
      <div className='contact-page'>
        <h3>CONTACT</h3>
        <h1>Say Hello</h1>
        <img
          src='https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='meeting-room'
        />
        <p className='contact-info'>
          Contact us today to discuss your next residential or commercial
          project.
        </p>
        <div className='contact-form'>
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li>
                <input placeholder='Name*' type='text' name='name' required />
              </li>
              <li>
                <input
                  placeholder='Email*'
                  type='email'
                  name='email'
                  required
                />
              </li>
              <li>
                <input
                  type='tel'
                  name='phoneNumber'
                  placeholder='Phone*'
                  required
                ></input>
              </li>
              <li>
                <textarea
                  placeholder='Notes'
                  name='message'
                  required
                ></textarea>
              </li>
              <li>
                <input type='submit' className='flat-button' value='SEND' />
              </li>
            </ul>
          </form>
        </div>
        <div className='contact-details'>
          <h3>Aim Studio Design</h3>
          <div>
            <p>Level 2, 105 Crown Street Darlinghurst NSW 2010</p>
            <p>+61 424 406 666</p>
            <a href='info@aimstudio.com.au'>info@aimstudio.com.au</a>
          </div>
        </div>
      </div>
      <div className='contact-page-right'>
        <img
          src='https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='meeting-room'
        />
      </div>
    </section>
  );
};

export default Contact;
