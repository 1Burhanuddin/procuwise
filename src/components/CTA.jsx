const CTA = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#1a0b2e] to-[#0f0517] rounded-3xl p-12 lg:p-16 relative overflow-hidden">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Square Pattern in Top Right */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect width='4' height='4'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-12 leading-tight text-white">
              Get started with <span className="text-white">proactive procurement</span>
            </h2>
            <p className="text-xl lg:text-2xl xl:text-3xl text-white max-w-5xl mx-auto mb-16 leading-relaxed">
              Book a personalized demo to see how Procuwise can centralize purchasing, automate workflows, and boost financial visibility for your business – to enable smarter, faster spend decisions.
            </p>
            <a 
              href="/get-started"
              className="inline-block bg-[#8b5cf6] text-white px-12 py-6 rounded-full text-xl lg:text-2xl font-semibold hover:bg-[#7c3aed] transition-all duration-200 transform hover:scale-105 shadow-2xl"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 