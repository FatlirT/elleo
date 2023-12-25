const Footer = () => {
  return (
    
    
<div className="backdrop-blur bg-gradient-to-b from-gray-900/70 to-gray-900/90">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <img src="/assets/images/elleo.svg" className="h-8 mr-3" alt="ELLEO Logo" />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm uppercase font-semibold text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                        <a href="https://www.ecscard.org.uk/card-types/electrotechnical/installation-electrician/" className="hover:underline">ECS Gold Card</a>
                      </li>
                      <li>
                      <a href="https://nationalcareers.service.gov.uk/job-profiles/electrician" className="hover:underline">Careers</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 uppercase text-sm font-semibold text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://instagram.com/leotrimknushi" className="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a href="https://www.facebook.com/leoo.kn" className="hover:underline">Facebook</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 uppercase text-sm font-semibold text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">ELLEO LTD</a>. All Rights Reserved.
          </span>
      </div>
    </div>
</div>




  )
}

export default Footer