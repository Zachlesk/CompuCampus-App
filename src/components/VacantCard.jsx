import { Chip } from '@nextui-org/react'
import { sendEmail } from '../services/compucampus'
export const VacantCard = () => {
  return (
    <a
      
      className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 mt-10"
    >
      <span
        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
      ></span>

      <div className="sm:flex sm:justify-between items-center ">
        <div className="hidden sm:block sm:shrink-0 ">
          <img
            alt="Paul Clapton"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="w-12 rounded-lg object-cover shadow-sm "
          />
        </div>
        <div className="">
          <h3 className="text-lg font-bold  sm:text-xl">
            React Developer
          </h3>
          <div className= "flex  gap-3 mt-4">
            <Chip size="sm" color="primary" variant="flat">Software Development</Chip>
            <Chip size="sm" color="success" variant="solid">💸$10000</Chip>
            <Chip size="sm" color="danger" variant="solid">Full Time</Chip>

          </div>
  
        </div>
        <div className="">
          <a
            className="group relative inline-flex items-center overflow-hidden rounded border border-current px-6 py-2 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            
          >
            <span className="absolute -start-full transition-all group-hover:start-4">
              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <button onClick={sendEmail} className="text-sm font-medium transition-all group-hover:ms-4">
              Details
            </button>
          </a>


        </div>
      </div>
     


    </a>
  )
}