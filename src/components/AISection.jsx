const AISection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#f4fefb] via-[#e8fdf7] to-[#d2fbef] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#31936a]/10 to-[#406266]/10"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-block bg-[#31936a] text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
                  AI designed for procurement
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight text-[#002e33]">
                  Proactive procurement, powered by <span className="text-[#31936a]">AI</span>
                </h2>
                <p className="text-xl lg:text-2xl text-[#406266] leading-relaxed mb-8">
                  Procuwise's AI-powered platform helps you move faster and make smarter spending decisions—automating data capture, streamlining approvals, and proactively identifying opportunities to optimize spend.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/ai-features"
                    className="inline-flex items-center bg-[#31936a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#406266] transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Explore AI features
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a 
                    href="/demo"
                    className="inline-flex items-center text-[#31936a] hover:text-[#406266] font-semibold transition-colors duration-200"
                  >
                    Watch AI demo
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative">
                  <img 
                    src="https://b3035216.smushcdn.com/3035216/wp-content/uploads/2025/01/Procurify-AI-designed-for-procurement.webp?lossy=0&strip=1&webp=1" 
                    alt="Procuwise AI designed for procurement" 
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#31936a]/20 to-[#406266]/20 rounded-2xl -z-10 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection; 