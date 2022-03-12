import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function HireMe() {
  return (
    <>
      <PageSEO
        title={`Hire ${siteMetadata.author} - Principal JavaScript Developer`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className="availability-indicator available"></span> Hire Me,{' '}
            <i>
              <small>a Senior JavaScript Developer...</small>
            </i>
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            ...with over 9+ years of proven experience working in IT industry as a Software
            Engineer.
          </p>
        </div>
        <div className="container py-5 columns-1">
          <div className="w-full">
            <p>
              If you're here, I assume you are interested in working with me. Let's hear about me
              first; I have over 9+ years of experience working in the IT industry as a Software
              Engineer. I have worked on eCommerce websites, mobile applications, health industry,
              fintech, wrok-force management industry, mortgage and insurance industry.
            </p>
            <br />
            <p>
              For the past few months, I've been working full-time as a Principal Software Engineer
              in Health sector. Previously, I have had experience working with Silicon Valley
              startups, industry giants, educational institutions and many more small and big
              companies.
            </p>
            <br />
            <p>
              If you'd like to get an idea of what I can do for you, take a look at my skillset
              below:
            </p>
            <div className="relative rounded-xl overflow-auto">
              <div className="shadow-sm overflow-hidden my-8">
                <table className="border-collapse table-auto w-full text-sm">
                  <thead className="table-header-group">
                    <tr className="table-row">
                      <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                        Platform
                      </th>
                      <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                        Technologies
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-800">
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        Languages
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 font-bold  ">
                        Javascript, PHP
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        Client-Side Technologies
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 font-bold  ">
                        ReactJS, AngularJS, VueJS, HTML/HTML5, CSS/CSS3, SCSS, RxJS, NGRX, Redux,
                        Redux Sagas, Redux Saga, axios
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        Native / Hybrid Mobile
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 font-bold  ">
                        React-Native, Ionic
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        Architecture
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 font-bold  ">
                        OO Design, Design Systems, MicroServices, MVC, MVVM, MVW
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        Server-Side Technologies
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 font-bold  ">
                        ExpressJS, NodeJS
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        Blockchain
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 font-bold  ">
                        NA
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        SDLC Methodologies
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 font-bold  ">
                        Agile/Scrum
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        CSS Frameworks
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 font-bold  ">
                        Angular Material, Ant Design, Material UI, Bootstrap, Blueprint, Tailwind
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        RDBMS
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 font-bold  ">
                        MySQL, Firebase Firestore
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        Build Tools
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 font-bold  ">
                        NPM, Yarn, Webpack, Docker
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        Operating Systems
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 font-bold  ">
                        Mac, Linux, Windows
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        Cloud/DevOps
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 font-bold  ">
                        DigitalOcean, Google Cloud (Computer Enginer, Maps API), AWS (EC2, S3,
                        Amplify, SES, Workmail, Codebuild, CodePipeline, API Gateway, Lambda)
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        CI/CD
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 font-bold  ">
                        AWS Amplify, Netlify, Vercel, GitLab CI/CD
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <div className="flex justify-center">
              <a
                href="#."
                className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-full w-auto max-w-xs flex items-center justify-center dark:bg-emerald-500 dark:highlight-white/20 dark:hover:bg-emerald-400"
              >
                Sold yet? Let's Discuss
              </a>
            </div>
            <br />
            <div className="container text-center py-6">
              <h2 className="text-5xl">
                How it's going to work?{' '}
                <i>
                  <small>Pretty Simple</small>
                </i>
              </h2>
            </div>
            <div className="container columns-3 text-center justify-center h-80 py-8">
              <div className="h-full">
                <h2 className="text-xl">Step 1 - Initial Call</h2>
                <p className="text-center py-3">
                  We'll setup an intial call and discuss your project. This is where I understand
                  what you have been working on and you let me know what you are looking for. This
                  stage also includes some basic requirement gathering as well.
                </p>
              </div>
              <div className="h-full">
                <h2 className="text-xl">Step 2 - Contract Details</h2>
                <p className="text-center py-3">
                  This is where we discuss how the project will be moved forward with my input, type
                  of billing, hourly rates/project budget and any additional requirements.
                </p>
              </div>
              <div className="h-full">
                <h2 className="text-xl">Step 3 - KickOff</h2>
                <p className="text-center py-3">
                  After everything has been finalized, I start working on the project. Regular
                  (weekly/bi-weekly) meetings are scheduled to report on the progress of the project
                  and you get to see your dream turn into reality -- while I make money!
                </p>
              </div>
            </div>
            <p className="text-center italic">
              Take a look at my{' '}
              <a
                className="underline underline-offset-8"
                href="https://linkedin.com/in/marslanaslam"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn profile
              </a>{' '}
              to learn more about my experience.
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}
