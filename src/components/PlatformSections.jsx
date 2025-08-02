const PlatformSections = () => {
  const sections = [
    {
      id: "purchasing",
      eyebrow: "purchasing",
      title: "Streamline purchasing from request to receipt",
      description: "Manage the full purchasing process with ease – from requisitions and approval routing to purchase orders – giving your team the visibility and control to reduce rogue spend and make confident buying decisions.",
      image: "https://b3035216.smushcdn.com/3035216/wp-content/uploads/2025/01/Procurement-software-purchasing-module-1.webp?lossy=0&strip=1&webp=1",
      link: "https://www.procurify.com/procure-to-pay/procurement/",
      linkText: "Purchasing solution",
      bgColor: "bg-[#f7fbfd]",
      imageOrder: "lg:order-1"
    },
    {
      id: "accounts-payable",
      eyebrow: "accounts payable",
      title: "Effortless reconciliation, accurate payments",
      description: "Move faster and reduce errors by automating your AP workflow, from AI-powered invoice capture to automated three-way matching and seamless payments – freeing up time for strategic tasks.",
      image: "https://b3035216.smushcdn.com/3035216/wp-content/uploads/2025/01/Procurement-software-accounts-payable-module-1.webp?lossy=0&strip=1&webp=1",
      link: "https://www.procurify.com/procure-to-pay/ap-automation/",
      linkText: "Accounts payable solution",
      bgColor: "bg-[#f7fbfd]",
      imageOrder: "lg:order-2"
    },
    {
      id: "expense-management",
      eyebrow: "expense management",
      title: "Gain control over every business expense",
      description: "Capture, approve, and track all business spend in one place – with expense requisitions, real-time reporting, and Spending Cards – for full visibility and proactive expense management.",
      image: "https://b3035216.smushcdn.com/3035216/wp-content/uploads/2025/01/Procurement-software-expenses-module-1.webp?lossy=0&strip=1&webp=1",
      link: "https://www.procurify.com/procure-to-pay/expense-and-card/",
      linkText: "Expense and card",
      bgColor: "bg-[#f7fbfd]",
      imageOrder: "lg:order-1"
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002e33] mb-6 leading-tight">
            One platform for end-to-end visibility and control
          </h2>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="flex space-x-8 border-b border-[#d9e0e1]">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-[#406266] hover:text-[#002e33] px-4 py-2 border-b-2 border-transparent hover:border-[#31936a] transition-colors duration-200 font-medium"
              >
                {section.eyebrow.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div key={section.id} id={section.id} className={`${section.bgColor} rounded-3xl p-8 lg:p-12 mb-12 lg:mb-16 shadow-lg`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className={`${section.imageOrder === 'lg:order-2' ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#31936a]/20 to-[#406266]/20 rounded-2xl -z-10 blur-xl"></div>
                </div>
              </div>
              <div className={`${section.imageOrder === 'lg:order-2' ? 'lg:order-1' : 'lg:order-2'}`}>
                <span className="inline-block bg-[#31936a] text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
                  {section.eyebrow}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002e33] mb-6 leading-tight">
                  {section.title}
                </h3>
                <p className="text-[#406266] leading-relaxed mb-8 text-lg">
                  {section.description}
                </p>
                <a 
                  href={section.link}
                  className="inline-flex items-center text-[#31936a] hover:text-[#406266] font-semibold transition-colors duration-200 text-lg group"
                >
                  {section.linkText}
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformSections; 