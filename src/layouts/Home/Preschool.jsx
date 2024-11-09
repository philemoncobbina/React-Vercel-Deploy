import React from 'react';

const Preschool = () => {
  return (
    <section className="relative mx-auto rounded-lg max-w-screen-xl mb-16">
      <div id="copilot-pro" aria-hidden="true" className="absolute -top-32 left-0 w-full h-0 overflow-hidden">
        <span>copilot-pr</span>
      </div>
      <div className="relative z-1 py-4">
        <div className="absolute top-32 bottom-32 left-0 rounded-lg right-0 z-0 bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark"></div>
        <div className="relative z-1 flex flex-col md:flex-row-reverse items-center">
          <div className="relative flex-1">
            <div className="flex justify-center items-center mx-auto" style={{ maxWidth: '25em' }}>
              <div className="relative shadow-lg  bg-opacity-80 p-4 rounded-lg">
                <div className="flex justify-center items-center">
                  <img
                    src="https://images.pexels.com/photos/3933229/pexels-photo-3933229.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    role="presentation"
                    loading="lazy"
                    draggable="false"
                    className="max-w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center text-left mt-8 md:mt-0 p-4 md:pl-9">
            <div className="mb-8">
              <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md">
                Enrol Now
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4">
              Ridoana <span className="notranslate">Preschool Section </span>
            </h2>
            <div className="max-w-lg">
              <p className="text-lg">
                Supercharge your creativity and productivity with a premium <span className="notranslate">Copilot</span> experience. Gain priority access to&nbsp;GPT-4 and GPT-4 Turbo during peak times for accelerated performance to generate answers, content, and AI images even faster. Upgrade to <span className="notranslate">Copilot Pro</span> directly in the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preschool;
