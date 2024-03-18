// import contact data
import { useState } from 'react';
import { contact } from '../data';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendMail = async (event) => {
    event.preventDefault();
    await axios
      .post(
        'http://localhost:8888/contact',
        {
          params: { name, email, subject, message },
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then((response) => {
        return response;
      })
      .catch((response) => {
        return response;
      });
  };

  return (
    <section id="contact" className="section bg-primary">
      <div className="container mx-auto">
        {/** section title */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="section-title
                    before:content-contact relative
                    before:absolute before:opacity-40
                    before:-top-7 before:-left-40 before:hidden
                    before:lg:block"
          >
            Contact me
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          {/** info */}
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div
                    className="text-accent rounded-sm w-14 h-14 flex items-start
                                    justify-center mt-2 mb-4 lg:mb-0 text-2xl"
                  >
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/** form */}
          <form className="space-y-8 w-full max-w-[780px]" onSubmit={sendMail}>
            <div className="flex gap-8">
              <input
                type="text"
                className="input"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="input"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              className="input"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              className="textarea"
              placeholder="Your message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="btn btn-lg bg-accent hover:bg-accent-hover"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
