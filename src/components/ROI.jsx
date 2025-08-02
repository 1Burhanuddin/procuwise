const ROI = () => {
  const stats = [
    {
      value: "96%",
      description: "reduction in requisition time",
      logo: "https://www.procurify.com/wp-content/uploads/2025/01/Logo-Canal_Barge-DARK.svg"
    },
    {
      value: "40%",
      description: "decrease in unapproved vendors",
      logo: "https://www.procurify.com/wp-content/uploads/2025/01/Logo-Proudfoot-DARK.svg"
    },
    {
      value: "$30K",
      description: "saved in a few weeks",
      logo: "https://www.procurify.com/wp-content/uploads/2025/01/Logo-Anakeesta-DARK.svg"
    },
    {
      value: "90%",
      description: "approval process efficiency increase",
      logo: "https://www.procurify.com/wp-content/uploads/2025/01/Logo-Sahara-DARK.svg"
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002e33] mb-6 leading-tight">
            Real customer ROI
          </h2>
          <p className="text-xl text-[#406266] max-w-4xl mx-auto mb-8 leading-relaxed">
            No matter your industry's procurement challenges, learn how Procurify partners with customers to streamline workflows from procure to pay to achieve measurable ROI.
          </p>
          <a 
            href="https://www.procurify.com/resources/stories/"
            className="inline-flex items-center bg-[#31936a] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#406266] transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Customer stories
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 border border-[#d9e0e1] rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#31936a] mb-4">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-[#406266] mb-8 leading-relaxed">
                {stat.description}
              </div>
              <div className="flex justify-center">
                <img 
                  src={stat.logo} 
                  alt="Customer logo"
                  className="h-8 lg:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROI; 