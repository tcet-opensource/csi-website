import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-[#02000593]">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-4 lg:py-4 ">
         
            <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-2 ">
              <div className="flex flex-col items-center">
                <h2 className="mb-6 text-sm sm:text-base lg:text-lg align-center justify-center font-semibold text-white uppercase dark:text-white">
                  Connect with us:
                </h2>
                <ul className="text-white font-light">
                  <li className="mb-4 flex items-center">
                    <img
                      src="../icons/github.png"
                      alt="1"
                      className="w-5 h-5"
                    />
                    <a
                      href="https://github.com/tcet-opensource/csi-website/"
                      className="hover:underline p-2">
                      Github
                    </a>
                  </li>
                  <li className="flex items-center">
                    <img
                      src="../icons/discord.png"
                      alt="1"
                      className="w-5 h-5"
                    />

                    <a
                      href="https://discord.gg/K7zpQYxC"
                      className="hover:underline p-2">
                      Discord
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center">
                <h2 className="mb-6 text-sm sm:text-base lg:text-lg font-semibold text-white uppercase dark:text-white">
                  Socials
                </h2>
                <ul className="text-white light">
                  <li className="mb-4 flex items-center">
                    <img
                      src="/icons/instagram.svg"
                      alt="1"
                      className="w-5 h-5"
                    />
                    <a
                      href="https://instagram.com/csitcet?igshid=NzZhOTFlYzFmZQ=="
                      className="hover:underline p-2">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <img
                        src="../icons/facebook.png"
                        alt="1"
                        className="w-5 h-5"
                      />
                      <a
                        href="/"
                        className="hover:underline p-2">
                        Facebook
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          
          <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
          {/* <div className="justify-items-center text-white">Made By CSI TECH TEAM</div> */}
          <h4 className="text-center text-white text-sm sm:text-base lg:text-lg">MADE BY CSI TECH TEAM</h4>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
