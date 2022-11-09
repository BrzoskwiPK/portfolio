import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col mb-[-50px] mt-[100px]">
        <h4 className="text-3xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk.</span>
        </h4>
      </div>

      <div className="space-y-10">
        <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">+48883288931</p>
        </div>

        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">brzoskwinia.gabriel@gmail.com</p>
        </div>

        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">Kraków, Poland</p>
        </div>

        <div className="flex flex-col ">
          <h4 className="text-2xl font-semibold text-center decoration-[#F7AB0A]/50 underline">
            Send me an e-mail
          </h4>
        </div>

        <form
          action="https://formsubmit.co/24b19c84b0510fe2577b259df578ebf0"
          method="POST"
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <input type="hidden" name="_next" value="http://localhost:3000" />
          <input
            type="hidden"
            className="hidden"
            name="_template"
            value="table"
          />
          <input type="hidden" name="_captcha" value="false" />
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              className="contactInput"
              type="text"
              name="name"
              required
            />
            <input
              placeholder="Email"
              className="contactInput"
              type="email"
              name="email"
              required
            />
          </div>
          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="_subject"
            required
          />
          <textarea
            placeholder="Message"
            className="contactInput"
            name="message"
            required
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
