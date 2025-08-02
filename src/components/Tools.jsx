const Tools = () => {
  const integrations = [
    {
      name: "Microsoft Dynamics 365 Business Central",
      logo: "https://b3035216.smushcdn.com/3035216/wp-content/uploads/2025/01/Logo-Microsoft-Dynamics-365-Business-Central-DARK.svg"
    },
    {
      name: "Sage",
      logo: "https://b3035216.smushcdn.com/3035216/wp-content/uploads/2025/01/Logo-Sage-DARK.svg"
    },
    {
      name: "Oracle NetSuite",
      logo: "https://b3035216.smushcdn.com/3035216/wp-content/uploads/2025/01/Logo-Oracle-NetSuite-DARK.svg"
    },
    {
      name: "Intuit QuickBooks",
      logo: "https://b3035216.smushcdn.com/3035216/wp-content/uploads/2025/01/Logo-Intuit-QuickBooks-DARK.svg"
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#f8f7ff] via-[#f0eeff] to-[#e8e5ff] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 to-[#7c3aed]/10"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-block bg-[#8b5cf6] text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
                  Integrations
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight text-gray-800">
                  Keep data synced across your Fintech stack
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
                  Procuwise integrates with your existing systems of record to consolidate and enhance your most critical financial data.
                </p>
                <a 
                  href="/integrations"
                  className="inline-flex items-center text-[#8b5cf6] hover:text-[#7c3aed] font-semibold transition-colors duration-200 text-lg group"
                >
                  Explore integrations
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  {integrations.map((integration, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <img 
                        src={integration.logo} 
                        alt={integration.name}
                        className="w-full h-12 lg:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#8b5cf6]/20 to-[#7c3aed]/20 rounded-2xl -z-10 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools; 