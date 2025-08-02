const Footer = () => {
  return (
    <footer className="bg-[#1a0b2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center py-6 border-b border-white">
          <div className="flex items-center">
            <a href="/" className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm min-w-[160px] justify-center">
              <img 
                src="/procuwise-logo.png" 
                alt="Procuwise" 
                className="h-8 w-auto"
              />
            </a>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/product" className="text-[#d9e0e1] hover:text-white transition-colors duration-200">Product</a>
            <a href="/solutions" className="text-[#d9e0e1] hover:text-white transition-colors duration-200">Solutions</a>
            <a href="/customers" className="text-[#d9e0e1] hover:text-white transition-colors duration-200">Customers</a>
            <a href="/resources" className="text-[#d9e0e1] hover:text-white transition-colors duration-200">Resources</a>
            <a href="/pricing" className="text-[#d9e0e1] hover:text-white transition-colors duration-200">Pricing</a>
            <a href="/login" className="text-[#d9e0e1] hover:text-white transition-colors duration-200">Login</a>
            <a 
              href="/get-started" 
              className="bg-[#8b5cf6] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7c3aed] transition-all duration-200"
            >
              Book a demo
            </a>
          </nav>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Procure-to-Pay Platform */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-6">Procure-to-Pay Platform</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-[#d9e0e1] mb-4">Product Overview</h4>
                  <ul className="space-y-3">
                    <li><a href="/features" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Features</a></li>
                    <li><a href="/pricing" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Pricing</a></li>
                    <li><a href="/why" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Why Procuwise</a></li>
                    <li><a href="/reviews" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Reviews</a></li>
                    <li><a href="/demo" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Book a demo</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#d9e0e1] mb-4">Procurement</h4>
                  <ul className="space-y-3">
                    <li><a href="/accounts" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Accounts</a></li>
                    <li><a href="/payable" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Payable</a></li>
                    <li><a href="/spending-card" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Spending Card</a></li>
                    <li><a href="/mobile" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Mobile</a></li>
                    <li><a href="/integrations" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Integrations</a></li>
                    <li><a href="/punchouts" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">PunchOuts</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Explore Procurify */}
            <div className="lg:col-span-4">
              <h3 className="text-lg font-semibold mb-6">Explore Procuwise</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-[#d9e0e1] mb-4">Company</h4>
                  <ul className="space-y-3">
                    <li><a href="/press" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Press</a></li>
                    <li><a href="/careers" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Careers</a></li>
                    <li><a href="/partners" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Partners</a></li>
                    <li><a href="/customers" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Customers</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#d9e0e1] mb-4">Solutions</h4>
                  <ul className="space-y-3">
                    <li><a href="/roles" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Roles</a></li>
                    <li><a href="/industry" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Industry</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#d9e0e1] mb-4">Case Studies</h4>
                  <ul className="space-y-3">
                    <li><a href="/whitepapers" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Whitepapers</a></li>
                    <li><a href="/guides" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Guides</a></li>
                    <li><a href="/blog" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Blog</a></li>
                    <li><a href="/webinars" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Webinars</a></li>
                    <li><a href="/events" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Events</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#d9e0e1] mb-4">Login</h4>
                  <ul className="space-y-3">
                    <li><a href="/contact" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Contact</a></li>
                    <li><a href="/support" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Support</a></li>
                    <li><a href="/demo" className="text-[#d9e0e1] hover:text-white transition-colors duration-200 text-sm">Book a demo</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Apps and Social Media */}
        <div className="py-8 border-t border-white">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-[#d9e0e1]">Mobile app available for download</span>
              <div className="flex space-x-3">
                <a href="#" className="text-[#d9e0e1] hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </a>
                <a href="#" className="text-[#d9e0e1] hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.81L6.05,21.34L14.54,12.85L16.81,15.81M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.19L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-[#d9e0e1] hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-[#d9e0e1] hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-[#d9e0e1] hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="py-6 border-t border-white">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#d9e0e1]">
              Copyright © Procuwise Technologies Inc. 2025. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/security" className="text-sm text-[#d9e0e1] hover:text-white transition-colors duration-200">Security</a>
              <a href="/terms" className="text-sm text-[#d9e0e1] hover:text-white transition-colors duration-200">Terms</a>
              <a href="/privacy" className="text-sm text-[#d9e0e1] hover:text-white transition-colors duration-200">Privacy</a>
              <a href="/california-privacy" className="text-sm text-[#d9e0e1] hover:text-white transition-colors duration-200">Your California Privacy Rights</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 