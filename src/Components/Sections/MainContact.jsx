import React from "react";
const MainContact = () => {
  return (
    <div className="Wrapper mx-auto  ">
      <div className="grid md:grid-cols-2 grid-cols-1 bg-color3 b-radius-1 md:mt-[100px] mt-[50px] p-6 ">
        <div>
          <h3 className="secondary-clr f-1 mb-6">Email</h3>
        </div>
        <div>
          <form>
            <div className="flex flex-col mb-8">
              <label className="secondary-clr text-xl">Name</label>
              <input
                type="text"
                required
                className="py-4  focus:outline-none bg-color3 border-b-[1px] border-[var(--secondary-clr)]"
              />
            </div>
            <div className=" flex flex-col mb-8">
              <label className="secondary-clr text-xl">Email Address</label>
              <input
                type="email"
                required
                className="py-4 focus:outline-none bg-color3 border-b-[1px] border-[var(--secondary-clr)]"
              />
            </div>
            <div className="mb-8 flex flex-col">
              <label className="secondary-clr text-xl">Message</label>
              <textarea
                required
                className="focus:outline-none bg-color3 border-b-[1px] border-[var(--secondary-clr)]"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                value="Send it"
                className="focus:outline-none b-shadow bg-primary-clr secondary-clr b-radius-1 px-4 py-2 cursor-pointer font-medium hover:text-[var(--primary-clr)] hover:bg-[var(--secondary-clr)] transition duration-100"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 bg-color3 b-radius-1 md:mt-[100px] mt-[50px] p-6 ">
        <div>
          <h3 className="secondary-clr f-1 mb-6">Social media</h3>
        </div>
        <div className="flex flex-col">
          <span className="secondary-clr underline text-xl">
            <a target="_blank" href="https://www.instagram.com/">
              Instagram
            </a>
          </span>
          <span className="secondary-clr underline text-xl">
            <a target="_blank" href="https://www.behance.net/">
              Behance
            </a>
          </span>
          <span className="secondary-clr underline text-xl">
            <a target="_blank" href="https://www.facebook.com/">
              Facebook
            </a>
          </span>
          <span className="secondary-clr underline text-xl">
            <a target="_blank" href="https://www.linkedin.com/">
              LinkedIn
            </a>
          </span>
          <span className="secondary-clr underline text-xl">
            <a target="_blank" href="https://www.twitter.com/">
              Twitter
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainContact;
