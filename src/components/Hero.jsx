const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#2d1b4e] via-[#1a0b2e] to-[#0f0517] text-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Content - Centered */}
          <div className="space-y-8">
            <div>
              <span className="text-[#8b5cf6] text-sm font-medium uppercase tracking-wide">
                Procurement software
              </span>
              <h1 className="mt-6 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight">
                Spend Control, <span className="text-white">Simplified.</span>
              </h1>
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl text-[#e8d5f7] leading-relaxed max-w-3xl mx-auto">
              <p>
                Take the complexity out of procurement. Procuwise automates your procure-to-pay process, 
                giving you full visibility and control over spend in one easy-to-use, AI-powered platform 
                your team will love.
              </p>
            </div>
            <div className="pt-4">
              <a 
                href="/get-started" 
                className="inline-block bg-[#8b5cf6] text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-[#7c3aed] transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Book a demo
              </a>
            </div>
          </div>
          
          {/* Video below text */}
          <div className="mt-16 flex justify-center">
            <div className="w-full max-w-2xl relative">
              <div className="bg-gradient-to-br from-[#2d1b4e]/20 to-[#1a0b2e]/20 rounded-2xl p-4 backdrop-blur-sm">
                <iframe 
                  src="https://lottie.host/embed/461d62a1-e84c-4347-935c-a4b0d4bdc536/QxFLa7Yx3X.lottie"
                  className="w-full aspect-video rounded-xl shadow-2xl"
                  frameBorder="0"
                  title="Procuwise Platform Demo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 