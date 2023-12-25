
// import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactUs = () => {
  // const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  // const [isFormValid, setIsFormValid] = useState(true);

  // const handleEmailChange = (event) => {
  //   const enteredEmail = event.target.value;
  //   setEmail(enteredEmail);

  //   // Regular expression to validate email format
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const isValid = emailRegex.test(enteredEmail);
  //   setIsValidEmail(isValid);
  // };
  // function randomDate(end) {
  //   return new Number(end + Math.random());
  // }
  // var p = randomDate(new Number()) * 10000000000000000;
  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_r7q5ga5",
  //       "template_v0xvzjn",
  //       e.target,
  //       "user_3TcS4pRKMgpo7fArsKmSf"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         window.location.href = "./thank-you/" + p;
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  //   if (isFormValid) {
  //     console.log("Form submitted successfully!");
  //     // Additional logic to handle form submission

  //     // Clear the email field
  //     setEmail("");
  //   } else {
  //     console.log("Form not valid. Please fill in all required fields.");
  //   }
   
  return (
    <div>
      <div className="container mx-auto">
        <section className="text-gray-700 body-font relative">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
            <h2 className="font-bold text-[#E52491] text-center text-[32px]  uppercase"> Contact Us</h2>
               
    
              <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
                Connecting minds, one message at a time.
              </p>
            </div>
            <form >
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#E52491] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={`w-full bg-gray-100 rounded border ${isValidEmail ? "border-gray-300" : "border-[#E52491]"
                          } focus:border-[#E52491] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                        // value={email}
                        
                      />
                      {!isValidEmail && (
                        <p className="text-[#E52491] text-sm mt-1">
                          Please enter a valid email address.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#E52491] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white font-semibold bg-[#E52491]  py-2 px-8 focus:outline-none hover:bg-gray-200 border border-[#E52491] hover:text-[#E52491] rounded text-base">
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
