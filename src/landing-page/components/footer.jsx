export default function Footer() {
  const footerLinks = {
    Product: ["Landing Page", "Popup Builder", "Web-design", "Content", "Integrations"],
    "Use Cases": ["Web-designers", "Marketers", "Small Business", "Website Builder"],
    Resources: ["Academy", "Blog", "Themes", "Hosting", "Developers", "Support"],
    Company: ["About Us", "Careers", "FAQs", "Teams", "Contact Us"]
  };

  return (
    <footer className="flex flex-col justify-center items-center px-20 py-20 mt-28 bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1712px] max-md:max-w-full">
        <div className="flex flex-col mt-28 ml-16 w-full max-w-[1485px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between items-start max-md:max-w-full">
            <div className="flex flex-col mt-3">
              <h2 className="self-start text-2xl text-center text-white">Subscribe</h2>
              <form className="flex mt-7 w-full min-h-[50px]">
                <label htmlFor="emailInput" className="sr-only">Enter your email Address</label>
                <input
                  type="email"
                  id="emailInput"
                  className="flex-1 px-2.5 py-4 bg-gray-200 shadow-lg text-lg text-gray-400"
                  placeholder="Enter your email Address"
                />
                <button type="submit" className="px-7 py-1.5 text-base text-center text-white whitespace-nowrap bg-purple-500 border border-solid max-md:px-5">
                  Subscribe
                </button>
              </form>
            </div>
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col text-sm text-white">
                <h3 className="text-lg font-bold">{category}</h3>
                {links.map((link, index) => (
                  <a key={index} href="#" className="mt-4 hover:text-violet-400">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div className="self-start mt-10 text-2xl font-light text-white">
            ©{new Date().getFullYear()} All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
