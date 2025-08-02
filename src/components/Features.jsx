const Features = () => {
  const features = [
    {
      eyebrow: "control",
      title: "Shape purchasing policies your way",
      description: "Standardize and configure workflows, enforce policies, and simplify approvals to improve financial discipline.",
      image: "https://b3035216.smushcdn.com/3035216/wp-content/uploads/2025/01/Procurify-procurement-software-benefit-control-and-configuration.webp?lossy=0&strip=1&webp=1"
    },
    {
      eyebrow: "speed",
      title: "Automate processes with AI",
      description: "Easy-to-use tools with built-in automation speed up purchasing and AP, freeing your team to focus on strategic priorities.",
      image: "https://b3035216.smushcdn.com/3035216/wp-content/uploads/2025/01/Procurify-procurement-software-benefit-speed-with-AI-automation.webp?lossy=0&strip=1&webp=1"
    },
    {
      eyebrow: "insight",
      title: "Make data-informed decisions",
      description: "Gain real-time visibility into budgets and uncover trends to optimize cash flow with AI-powered analytics.",
      image: "https://b3035216.smushcdn.com/3035216/wp-content/uploads/2025/05/Benefit-3-Insight-Image-2025-05.webp?lossy=0&strip=1&webp=1"
    }
  ];

  return (
    <section className="bg-[#f7fbfd] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002e33] mb-6 leading-tight">
            Easier, faster, smarter procurement
          </h2>
          <p className="text-xl text-[#406266] max-w-4xl mx-auto leading-relaxed">
            Consolidate purchasing, expense management, and accounts payable in one tool and gain full visibility and financial control to manage spend with confidence. Procuwise it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#e8fdf7] rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#d2fbef]">
              <div className="mb-6">
                <span className="inline-block bg-[#31936a] text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
                  {feature.eyebrow}
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#002e33] mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[#406266] leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className="mt-8">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 lg:h-56 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 