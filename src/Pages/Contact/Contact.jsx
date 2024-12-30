/* eslint-disable react/no-unescaped-entities */

import NavbarElse from "../../components/Navbar/NavbarElse";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  function handleInputChange(event) {
    const input = event.target;
    const inputValue = input.value;

    // Regular expression to check for links (URLs)
    const linkPattern = /^(http|https):\/\/[^\s$.?#].[^\s]*$/i;

    if (linkPattern.test(inputValue)) {
      // If a link is detected, clear the input field and show an error message
      input.value = "";
      alert("Links are not allowed. Please remove the link from your message.");
    }
  }

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    // const name = form.name.value;
    // const email = form.email.value;
    // const subject = form.subject.value;
    // const message = form.message.value;

    // const myMessage = {
    //   name,
    //   email,
    //   subject,
    //   message,
    // };
    // console.log(myMessage);

    emailjs
      .sendForm(
        "service_mmvs2lo",
        "template_065ufmr",
        form.current,
        "EmkhIdO5posmuQHJP"
      )
      .then(
        (result) => {
          console.log(result.text);
          result.text && toast.success("Message Sent!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          error.text && toast.error("Message Not Sent!");
        }
      );
  };

  return (
        <div>
          <NavbarElse></NavbarElse>
          {/* contact us section here  */}
          <div className="w-11/12 mx-auto">
          <section className="mt-12 px-5">
            <div className="text-4xl text-center bg-blue-50 lg:w-1/3 rounded-full m-auto mb-12 py-5 font-bold">
              Contact Us
            </div>

            {/* <!-- input Fields  --> */}
            <form ref={form} onSubmit={handleSubmit} className=" border w-1/2 mx-auto p-5">
              {/* <!-- field1  --> */}
              <div className="form-control w-full max-w-xl mx-auto">
                <label className="label">
                  <span className="label-text">
                    Name <span className="text-red-600 text-xl font-bold">*</span>
                  </span>
                  <span className="label-text-alt"></span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xl"
                  maxLength={256}
                  required
                />
                <label className="label">
                  <span className="label-text-alt"></span>
                  <span className="label-text-alt"></span>
                </label>
              </div>
              <div className="form-control w-full max-w-xl mx-auto">
                <label className="label">
                  <span className="label-text">
                    Email <span className="text-red-600 text-xl font-bold">*</span>
                  </span>
                  <span className="label-text-alt"></span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xl"
                  maxLength={256}
                  required
                />
                <label className="label">
                  <span className="label-text-alt"></span>
                  <span className="label-text-alt"></span>
                </label>
              </div>
              <div className="form-control w-full max-w-xl mx-auto">
                <label className="label">
                  <span className="label-text">
                    Subject{" "}
                    <span className="text-red-600 text-xl font-bold">*</span>
                  </span>
                  <span className="label-text-alt"></span>
                </label>
                <input
                  name="subject"
                  placeholder="Subject"
                  className="input input-bordered w-full max-w-xl "
                  maxLength={256}
                  required
                />
                <label className="label">
                  <span className="label-text-alt"></span>
                  <span className="label-text-alt"></span>
                </label>
              </div>
              <div className="form-control w-full max-w-xl mx-auto">
                <label className="label">
                  <span className="label-text">
                    Message{" "}
                    <span className="text-red-600 text-xl font-bold">*</span>
                  </span>
                  <span className="label-text-alt"></span>
                </label>
                <textarea
                  name="message"
                  type="text"
                  placeholder="your message(maximum limit = 2000 words)"
                  className="textarea textarea-bordered textarea-lg w-full max-w-full"
                  maxLength={2000}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <label className="label">
                  <span className="label-text-alt"></span>
                  <span className="label-text-alt"></span>
                </label>
              </div>
              <input
                className="btn w-full mx-auto"
                type="submit"
                value="Send"
              />
            </form>
          </section>
        </div>
    {/* address here  */}
          <div className="text-center mb-16">
          <div className="text-4xl text-center bg-blue-50 lg:w-1/3 w-full mx-auto rounded-full mt-10 py-5 font-bold">
              OUR LOCATIONS
            </div>
          </div >
          {/* timeline */}

          <div
          className="px-5 lg:px-40 overflow-hidden w-11/12 mx-auto">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li >
        <div className="timeline-middle text-xl">

        </div>
        <hr />
        <div className="timeline-start md:text-start mb-10">

          <time className="font-mono italic">Corporate Office:</time>
          <div className="text-lg font-black">KCF Co. Ltd. BD:</div>
          House 71, Road-6, West Kawlar Khilkhet, Dhaka-1229, Bangladesh
        </div>
        <hr/>
      </li>
      <li >
        <div className="timeline-middle text-xl">

        </div>
        <div className="timeline-start md:text-start mb-10">
          <time className="font-mono italic">Japan Office:</time>
          <div className="text-lg font-black">KCF Co. Ltd. Japan </div>
                (Seiken Medical Industry Co. Ltd.) <br />
                1-5-15 Nishitenma, Kita-ku, Osaka-shi, Osaka, Japan, 530-0047 <br />

                <br />
                Mobile : +81-90-3975-3625, +81-80-1890-4924  <br />
                Fax: 06-7504-4721
                <br />

                E-mail: h-siddiki@kcfjp.com, m-nabi@kcfjp.com
        </div>
        <hr/>
      </li>
      <li >
        <div className="timeline-middle text-xl">

        </div>
        <div className="timeline-start md:text-start mb-10">
          <time className="font-mono italic">Partner Company:</time>
          <div className="text-lg font-black">PROSERVE K.K.:</div>
           Kyoto-shi, Sakyo-ku, Takano, Higashihirakicho 1-7-6-301,Japan, 606-8107 <br />

        </div>
        <hr/>
      </li>
      <li >
        {/* <div className="timeline-middle text-xl">

        </div> */}
        <div className="timeline-start md:text-start mb-10">
          {/* <time className="font-mono italic">Partner Company:</time> */}
          <div className="text-lg font-black">NEXTGEN SOLUTION LTD.:</div>
          <span className="font-semibold"></span>  41a Maryland Road Maryland Road, London, England, E15 1JJ

        </div>
        <hr/>
      </li>

    </ul>
          </div>
        </div>

    
  );
};

export default Contact;
