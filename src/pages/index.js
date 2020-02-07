import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const CheckIcon = () => (
  <svg
    className="w-4.5 h-4.5 inline -ml-7 mr-1.5 -mt-0.7 flex-shrink-0 text-gray-600 print:text-gray-900"
    viewBox="0 0 24 24"
  >
    <path
      className="fill-current"
      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
    />
  </svg>
);

const Skill = ({ name }) => (
  <li className="px-3 py-0 mr-1.5 mt-1.5 flex item-center justify-center rounded-full text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
    {name}
  </li>
);

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`resume`, `cv`, `software engineer`, `Jayden Windle`]}
        title="Jayden Windle - Resume"
      />
      <main className="font-main hyphens-manual optimize-legibility">
        {/* <!-- Page --> */}
        <div className="p-6 mx-auto bg-white page max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16">
          {/* <!-- Name --> */}
          <header className="flex items-center mb-9">
            <div className="initials-container mr-5 text-base leading-none text-white bg-gray-800 font-medium print:bg-black px-3 py-2.5">
              <div className="initial text-center pb-0.8">J</div>
              <div className="text-center initial">W</div>
            </div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Jayden Windle
            </h1>
          </header>
          {/* <!-- end Name --> */}

          {/* <!-- Column --> */}
          <div className="md:col-2 print:col-2 col-gap-md md:h-letter-col print:h-letter-col col-fill">
            {/* <!-- Use mt-3 class when the element isn’t the first one in the column --> */}
            <section>
              {/* <!-- To keep in the same column --> */}
              <div className="col-break-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  ABOUT ME
                </h2>

                <section className="mb-4 col-break-avoid">
                  <p className="mt-2 text-md text-gray-800 leading-normal">
                    I’m a product-focused software engineer with over 7 years of
                    experience building world-class apps across all platforms.
                  </p>
                  <p className="mt-2 text-md text-gray-800 leading-normal">
                    My experience ranges from writing low-level C drivers, to
                    architecting distributed backend systems, to crafting
                    cross-platform apps for web and mobile.
                  </p>
                </section>
              </div>
            </section>

            <section className="mt-9">
              {/* <!-- To keep in the same column --> */}
              <div className="col-break-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  EXPERIENCE
                </h2>

                <section className="mb-4 col-break-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-800 leading-snugish">
                      Jetpack
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      CTO, Co-founder | 2017 – Present
                    </p>
                  </header>
                  <p className="pl-7 mt-2 text-md text-gray-800 leading-normal">
                    <CheckIcon />
                    Lead the development of a cross-platform consumer mobile app
                    and its backend from idea to scalable production deployment
                  </p>
                  <p className="pl-7 mt-2 text-md text-gray-800 leading-normal">
                    <CheckIcon />
                    Incorporated user and stakeholder feedback quickly to
                    deliver countless iterations across 4 major versions
                  </p>
                  <section className="mt-2 mb-4 col-break-avoid">
                    <ul className="mb-6 flex flex-wrap text-md leading-relaxed">
                      <Skill name="Django" />
                      <Skill name="React Native" />
                      <Skill name="GraphQL" />
                      <Skill name="Kubernetes" />
                    </ul>
                  </section>
                </section>
              </div>

              <section className="mb-4 col-break-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-800 leading-snugish">
                    Freelance
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    Software Engineer | 2012 – Present
                  </p>
                </header>
                <p className="pl-7 mt-2 text-md text-gray-800 leading-normal">
                  <CheckIcon />
                  Partnered with dozens of companies and several remote software
                  development agencies to develop functional web apps and
                  high-quality websites
                </p>
                <section className="mt-2 mb-4 col-break-avoid">
                  <ul className="mb-6 flex flex-wrap text-md leading-relaxed">
                    <Skill name="Javascript" />
                    <Skill name="PHP" />
                    <Skill name="WordPress" />
                    <Skill name="HTML5/CSS" />
                  </ul>
                </section>
              </section>

              <section className="mb-4 col-break-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-800 leading-snugish">
                    Magnet Forensics
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    Software Developer | 2017
                  </p>
                </header>
                <p className="pl-7 mt-2 text-md text-gray-800 leading-normal">
                  <CheckIcon />
                  Helped launch a new digital forensics product used by police
                  forces and government agencies around the world
                </p>
                <p className="pl-7 mt-2 text-md text-gray-800 leading-normal">
                  <CheckIcon />
                  Reverse-engineered and integrated numerous cloud service APIs
                  into an C#/.NET application
                </p>
                <section className="mt-2 mb-4 col-break-avoid">
                  <ul className="mb-6 flex flex-wrap text-md leading-relaxed">
                    <Skill name="C#" />
                    <Skill name=".NET" />
                    <Skill name="Jenkins" />
                    <Skill name="REST APIs" />
                  </ul>
                </section>
              </section>

              <section className="mb-4 col-break-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-800 leading-snugish">
                    Synopsys
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    Technical Intern | 2016
                  </p>
                </header>
                <p className="pl-7 mt-2 text-md text-gray-800 leading-normal">
                  <CheckIcon />
                  Lead development of low-level serial drivers for a secure SoC
                </p>
                <section className="mt-2 mb-4 col-break-avoid">
                  <ul className="mb-6 flex flex-wrap text-md leading-relaxed">
                    <Skill name="C" />
                    <Skill name="Python" />
                    <Skill name="Bash" />
                  </ul>
                </section>
              </section>
            </section>

            <section className="mt-9">
              {/* <!-- To keep in the same column --> */}
              <div className="col-break-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  PROJECTS
                </h2>

                <section className="mb-4 col-break-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-800 leading-snugish">
                      <a href="//tryjetpack.com" className="group">
                        Jetpack App
                        <svg
                          className="inline ml-1 -mt-1 w-5 text-gray-600 group-hover:text-gray-800 change-color-fast print:text-gray-900"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="fill-current"
                            d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
                          />
                        </svg>
                      </a>
                    </h3>
                  </header>
                  <p className="mt-2 text-md text-gray-800 leading-normal">
                    Automatic geolocation-based group chats. A cross-platform
                    consumer mobile app built using React Native with a Django
                    backend.
                  </p>
                </section>
              </div>

              <section className="mb-4 col-break-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-800 leading-snugish">
                    <a href="//supertab.io" className="group">
                      supertab
                      <svg
                        className="inline ml-1 -mt-1 w-5 text-gray-600 group-hover:text-gray-800 change-color-fast print:text-gray-900"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className="fill-current"
                          d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
                        />
                      </svg>
                    </a>
                  </h3>
                </header>
                <p className="mt-2 text-md text-gray-800 leading-normal">
                  Superhuman for browser tabs. A keyboard-based tab manager for
                  Chrome that makes you 10x more productive.
                </p>
              </section>

              <section className="mb-4 col-break-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-800 leading-snugish">
                    <a
                      href="https://github.com/jaydenwindle/graphene-subscriptions"
                      className="group"
                    >
                      graphene-subscriptions
                      <svg
                        className="inline ml-1 -mt-1 w-5 text-gray-600 group-hover:text-gray-800 change-color-fast print:text-gray-900"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className="fill-current"
                          d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
                        />
                      </svg>
                    </a>
                  </h3>
                </header>
                <p className="mt-2 text-md text-gray-800 leading-normal">
                  Open-source GraphQL Subscriptions implementation for Django
                  and Graphene built using Django Channels.
                </p>
              </section>
            </section>

            <section className="mt-9">
              {/* <!-- To keep in the same column --> */}
              <div className="col-break-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  SKILLS
                </h2>

                <section className="mb-4 col-break-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-800 leading-snugish">
                      JavaScript
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      7 years exp.
                    </p>
                  </header>
                  <ul className="my-2 mb-6 flex flex-wrap text-md leading-relaxed">
                    <Skill name="ES6" />
                    <Skill name="Node.js" />
                    <Skill name="React / React Native" />
                    <Skill name="Typescript" />
                  </ul>
                </section>

                <section className="mb-4 col-break-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-800 leading-snugish">
                      Python
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      5 years exp.
                    </p>
                  </header>
                  <ul className="my-2 mb-6 flex flex-wrap text-md leading-relaxed">
                    <Skill name="Django" />
                    <Skill name="Django REST Framework" />
                    <Skill name="Graphene" />
                    <Skill name="Flask" />
                    <Skill name="Asyncio" />
                    <Skill name="Ansible" />
                  </ul>
                </section>
              </div>

              <section className="mb-4 col-break-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-800 leading-snugish">
                    Other
                  </h3>
                </header>
                <ul className="py-1.5 mb-6 flex flex-wrap text-md leading-relaxed">
                  <Skill name="GraphQL" />
                  <Skill name="Git" />
                  <Skill name="CI/CD" />
                  <Skill name="Kubernetes" />
                  <Skill name="Linux" />
                  <Skill name="Bash" />
                  <Skill name="PHP" />
                  <Skill name="WordPress" />
                  <Skill name="HTML5/CSS" />
                  <Skill name="Figma" />
                </ul>
              </section>
            </section>

            <section className="mt-9">
              {/* <!-- To keep in the same column --> */}
              <div className="col-break-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  EDUCATION
                </h2>

                <section className="mb-4 col-break-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-800 leading-snugish">
                      Carleton University
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Bachelor of Computer Science | 2015 - 2017
                    </p>
                  </header>
                </section>
              </div>
            </section>

            <section className="mt-9">
              {/* <!-- To keep in the same column --> */}
              <div className="col-break-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                  CONTACT
                </h2>
                <section className="mb-4 col-break-avoid">
                  <ul>
                    <li className="mt-1.5 leading-normal text-gray-800 pl-7 text-md">
                      <a href="//jaydenwindle.com" className="group">
                        <svg
                          className="w-4.5 h-4.5 inline -ml-7 mr-1.5 -mt-0.8"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-gray-600 fill-current group-hover:text-gray-800 change-color-fast print:text-gray-900"
                            d="M19.48 13.03A4 4 0 0 1 16 19h-4a4 4 0 1 1 0-8h1a1 1 0 0 0 0-2h-1a6 6 0 1 0 0 12h4a6 6 0 0 0 5.21-8.98L21.2 12a1 1 0 1 0-1.72 1.03zM4.52 10.97A4 4 0 0 1 8 5h4a4 4 0 1 1 0 8h-1a1 1 0 0 0 0 2h1a6 6 0 1 0 0-12H8a6 6 0 0 0-5.21 8.98l.01.02a1 1 0 1 0 1.72-1.03z"
                          />
                        </svg>
                        jaydenwindle.com
                      </a>
                    </li>
                    <li className="mt-1.5 leading-normal text-gray-800 pl-7 text-md">
                      <a href="//github.com/jaydenwindle" className="group">
                        <svg
                          className="w-4.5 h-4.5 inline -ml-7 mr-1.5 -mt-0.8"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-gray-600 fill-current group-hover:text-gray-800 change-color-fast print:text-gray-900"
                            d="M19.48 13.03A4 4 0 0 1 16 19h-4a4 4 0 1 1 0-8h1a1 1 0 0 0 0-2h-1a6 6 0 1 0 0 12h4a6 6 0 0 0 5.21-8.98L21.2 12a1 1 0 1 0-1.72 1.03zM4.52 10.97A4 4 0 0 1 8 5h4a4 4 0 1 1 0 8h-1a1 1 0 0 0 0 2h1a6 6 0 1 0 0-12H8a6 6 0 0 0-5.21 8.98l.01.02a1 1 0 1 0 1.72-1.03z"
                          />
                        </svg>
                        github.com/jaydenwindle
                      </a>
                    </li>
                    {/* <!-- <li className="mt-1.5 leading-normal text-gray-800 pl-7 text-md">
                  <a href="//linkedin.com/in/jayden-windle-79b0bb68/" className="group"><svg className="w-4.5 h-4.5 inline -ml-7 mr-1.5 -mt-0.8"
                      viewBox="0 0 24 24">
                      <path
                        className="text-gray-600 fill-current group-hover:text-gray-800 change-color-fast print:text-gray-900"
                        d="M19.48 13.03A4 4 0 0 1 16 19h-4a4 4 0 1 1 0-8h1a1 1 0 0 0 0-2h-1a6 6 0 1 0 0 12h4a6 6 0 0 0 5.21-8.98L21.2 12a1 1 0 1 0-1.72 1.03zM4.52 10.97A4 4 0 0 1 8 5h4a4 4 0 1 1 0 8h-1a1 1 0 0 0 0 2h1a6 6 0 1 0 0-12H8a6 6 0 0 0-5.21 8.98l.01.02a1 1 0 1 0 1.72-1.03z" />
                    </svg>linkedin.com/in/jayden-windle-79b0bb68/
                  </a>
                </li> --> */}
                    <li className="mt-1.5 leading-normal text-gray-800 pl-7 text-md">
                      <a href="mailto:jaydenwindle@gmail.com" className="group">
                        <svg
                          className="w-4.5 h-4.5 inline -ml-7 mr-1.5 -mt-0.8"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-gray-600 fill-current group-hover:text-gray-800 change-color-fast print:text-gray-900"
                            d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"
                          />
                        </svg>
                        jaydenwindle@gmail.com
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </section>
          </div>
          {/* <!-- end Column --> */}
        </div>
        {/* <!-- end Page --> */}
      </main>
    </Layout>
  );
}

export default IndexPage;
