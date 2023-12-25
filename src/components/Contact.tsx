import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="relative py-8 lg:py-16 px-4 mx-auto w-full top-level-contact items-center justify-center flex-col backdrop-blur bg-gray-900/70"
      >

        <div className="pt-20 actual-form">
          <h1 className="px-8 mb-9 text-4xl tracking-tight font-extrabold text-center text-white">Need a quote on your Job?</h1>
          <p className="mb-8 px-8 mt-8 font-light text-center text-gray-300 sm:text-xl">
            Want to find out more about us? <br></br>
            Contact us using the form below, and we&lsquo;ll get back to you!
          </p>
          <div className="py-8 px-8 mx-auto">
            <form action="#" className="space-y-8">
              <div className="row-1 max-sm:flex-col flex flex-row w-full gap-8">
                <div className="w-full">
                  <label
                    htmlFor="first-name"
                    className="block whitespace-nowrap mb-2 text-sm font-medium text-gray-200"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="block p-3 w-full text-sm rounded-lg border shadow-md shadow-gray-400/10 bg-gray-900/70 border-gray-600 placeholder-gray-300/80 text-white focus:ring-primary-500 focus:border-primary-500 shadow-gray-400/10-light"
                    placeholder="Al-Medina"
                    required
                  ></input>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="last-name"
                    className="block whitespace-nowrap mb-2 text-sm font-medium text-gray-200"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="block p-3 w-full text-sm rounded-lg border shadow-md shadow-gray-400/10 bg-gray-900/70 border-gray-600 placeholder-gray-300/80 text-white focus:ring-primary-500 focus:border-primary-500 shadow-gray-400/10-light"
                    placeholder="Al-Munawwarah"
                    required
                  ></input>
                </div>
              </div>

              <div className="row-2 flex w-full gap-8 max-sm:flex-col">
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block whitespace-nowrap mb-2 text-sm font-medium text-gray-200"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block p-3 w-full text-sm rounded-lg border shadow-md shadow-gray-400/10 bg-gray-900/70 border-gray-600 placeholder-gray-300/80 text-white focus:ring-primary-500 focus:border-primary-500 shadow-gray-400/10-light"
                    placeholder="name@ello.com"
                    required
                  ></input>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="subject"
                    className="block whitespace-nowrap mb-2 text-sm font-medium text-gray-200"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="block p-3 w-full text-sm rounded-lg border shadow-md shadow-gray-400/10 bg-gray-900/70 border-gray-600 placeholder-gray-300/80 text-white focus:ring-primary-500 focus:border-primary-500 shadow-gray-400/10-light"
                    placeholder="+44 1234 567890"
                    required
                  ></input>
                </div>
              </div>

              <div className="sm:col-span-2 row-3">
                <label
                  htmlFor="message"
                  className="block whitespace-nowrap mb-2 text-sm font-medium text-gray-200"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm rounded-lg shadow-md shadow-gray-400/10 border bg-gray-900/70 border-gray-600 placeholder-gray-300/80 text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enquire here..."
                ></textarea>
              </div>

              <p className="text-gray-400 font-extralight text-sm">
                By submitting this form you agree to our{" "}
                <Link
                  className="text-white underline hover:text-yellow-400"
                  href="/"
                >
                  terms and conditions
                </Link>{" "}
                and our{" "}
                <Link
                  className="text-white hover:text-yellow-400 underline"
                  href="/"
                >
                  privacy policy
                </Link>{" "}
                which explains how we may collect, use and disclose your
                personal information including to third parties.
              </p>

              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center bg text-white rounded-lg bg-gray-900/70 sm:w-fit hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 row-5"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        <div className="opacity-60 w-full absolute bottom-0 left-0 mb-80 -z-10 py-96">
          <Image
            src="/assets/images/prn.jpg"
            alt="prn"
            fill
            className="object-cover"
          />
        </div>

        <div className="contact-titles pt-24 px-4">
          <h2 className="mb-9 text-4xl tracking-tight font-extrabold text-center text-white">
            Alternatively, you can:
          </h2>

          <div className="gap-12 py-12 contact-cards w-full flex flex-row max-md:items-center max-md:flex-col items-stretch justify-center">

            <div className="px-2 max-w-xs bg-gray-900/80 rounded-xl py-6 contact-card-phone w-full flex flex-col items-center justify-center text-center">
              <div className="icon-container bg-gray-900/80 rounded-xl p-4 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-7 h-7 flex-shrink-0 text-white hover:text-white "
                >
                  <path d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" />
                </svg>
              </div>
              <h1 className="text-white text-2xl tracking-tight font-extrabold">
                Ring us:
              </h1>
              <p className="text-gray-400 py-5">
                Call us to speak to a member of our team, <br />
                we are always happy to help!
              </p>
              <Link
                className="text-white font-semibold hover:text-yellow-400 underline"
                href="tel:+445555555555"
              >
                05555 555555
              </Link>
            </div>

            <div className="h- px-2 max-w-xs bg-gray-900/80 rounded-xl py-6 contact-card-email w-full flex flex-col items-center justify-center text-center">
              <div className="icon-container bg-gray-900/80 rounded-xl p-4 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="white"
                  className="w-7 h-7 flex-shrink-0"
                >
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
              </div>
              <h1 className="text-white text-2xl tracking-tight font-extrabold">
                Email us:
              </h1>
              <p className="text-gray-400 py-5">
                Email us for a quote <br /> to get started on your job!
              </p>
              <Link
                className="text-white font-semibold hover:text-yellow-400 underline"
                href="mailto:contact-us@elleo.com"
              >
                contact-us@elleo.com
              </Link>
            </div>

            <div className="px-2 max-w-xs bg-gray-900/80 rounded-xl py-6 w-full flex flex-col items-center justify-center contact-card-location text-center">
              <div className="icon-container bg-gray-900/80 rounded-xl p-4 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="white"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h1 className="text-white text-2xl tracking-tight font-extrabold">
                Visit Us:
              </h1>
              <p className="text-gray-400 py-5 ">
                42 Elec Road, <br />
                Trician NT1 TE2, <br />
                London, United Kingdom
              </p>
              <Link
                className="text-white font-semibold underline hover:text-yellow-400"
                href="#contact"
              >
                Visit us
              </Link>
            </div>

          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.5851779006!2d-0.26640131741834105!3d51.52852620633319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1701717055919!5m2!1sen!2suk"
            width="800"
            height="400"
            loading="lazy"
            className="w-full mb-9"
          ></iframe>

          <p className="mb-8 text-sm text-center text-gray-400">
            Our working hours are between 9am and 6pm.
          </p>

        </div>



      </div>
    </>
  );
};

export default Contact;
