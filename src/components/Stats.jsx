const Stats = () => {
  const logos = [
    {
      name: "Canal Barge",
      logo: "https://www.procurify.com/wp-content/uploads/2025/01/Logo-Canal_Barge-DARK.svg"
    },
    {
      name: "Proudfoot",
      logo: "https://www.procurify.com/wp-content/uploads/2025/01/Logo-Proudfoot-DARK.svg"
    },
    {
      name: "Anakeesta",
      logo: "https://www.procurify.com/wp-content/uploads/2025/01/Logo-Anakeesta-DARK.svg"
    },
    {
      name: "Sahara",
      logo: "https://www.procurify.com/wp-content/uploads/2025/01/Logo-Sahara-DARK.svg"
    },
    {
      name: "Quest Trade",
      logo: "https://www.procurify.com/wp-content/uploads/2025/01/Logo-Quest_Trade-DARK.svg"
    },
    {
      name: "Skip the Dishes",
      logo: "https://www.procurify.com/wp-content/uploads/2025/01/Logo-Skip_the_Dishes-DARK.svg"
    },
    {
      name: "Tennessee Aquarium",
      logo: "https://www.procurify.com/wp-content/uploads/2025/01/Logo-Tennessee_Aquarium-DARK.svg"
    },
    {
      name: "A3",
      logo: "https://www.procurify.com/wp-content/uploads/2025/01/Logo-A3-DARK.svg"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002e33] mb-4">
            Trusted by leading companies worldwide
          </h2>
          <p className="text-lg text-[#406266] max-w-2xl mx-auto">
            Over $20B in spend managed through our platform
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex space-x-16 lg:space-x-20 items-center min-w-full">
              {logos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center">
                  <img 
                    src={logo.logo} 
                    alt={logo.name}
                    className="h-12 lg:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                    style={{ minWidth: '120px' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-16 lg:space-x-20 items-center min-w-full ml-16 lg:ml-20">
              {logos.map((logo, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 flex items-center justify-center">
                  <img 
                    src={logo.logo} 
                    alt={logo.name}
                    className="h-12 lg:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                    style={{ minWidth: '120px' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 