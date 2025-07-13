const StudentPlan = () => {
  return (
    <div className="bg-[#F5F5F5] py-10 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground">
          Find Your Perfect Plan
        </h2>
        <h5 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-primary-foreground mt-4 sm:mt-5">
          See how Capable has transformed users social experiences through{" "}
          <br />
          their own words.
        </h5>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-stretch gap-x-10 gap-y-10">
          {/* Pro Plan */}
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-md p-8 flex flex-col">
            <h2 className="text-4xl font-semibold text-gray-900">Pro</h2>
            <p className="text-lg text-gray-500 mt-1">For 3 months</p>

            <div className="flex items-end mt-4 space-x-2">
              <span className="text-4xl font-bold text-orange-500">$399</span>
              <span className="text-lg text-blue-500">one time</span>
            </div>

            <hr className="my-10 border-gray-200" />

            <ul className="space-y-2 text-lg text-gray-700 flex-1">
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✓</span> Full Service
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✓</span> 10+ interviews
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✓</span> Resume + LinkedIn
                + Shell Exp.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✓</span> Automated
                Applications
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✓</span> Mock Interviews
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✓</span> Skill Guidance
              </li>
            </ul>

            <button className="mt-10 w-full rounded-md border border-purple-500 py-2 text-purple-700 font-medium hover:bg-purple-50 transition">
              Get Started
            </button>
          </div>

          {/* Success Plan */}
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-md p-8 flex flex-col">
            <h2 className="text-4xl font-semibold text-gray-900">Success</h2>
            <p className="text-lg text-gray-500 mt-1">Until job is secured</p>

            <div className="flex items-end mt-4 space-x-2">
              <span className="text-4xl font-bold text-orange-500">$999</span>
              <span className="text-lg text-blue-500">per month</span>
            </div>

            <hr className="my-10 border-gray-200" />

            <ul className="space-y-2 text-lg text-gray-700 flex-1">
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✓</span> Same services as
                Pro Plan
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✓</span> Continuous
                support
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✓</span> No time pressure
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✓</span> Cancel anytime
                after placement
              </li>
            </ul>

            <button className="mt-10 w-full rounded-md border border-purple-500 py-2 text-purple-700 font-medium hover:bg-purple-50 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPlan;
