import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center px-4 py-2 min-w-[160px] justify-center">
              <img 
                src="/procuwise-logo.png" 
                alt="Procuwise" 
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('product')}
                  className="flex items-center text-gray-700 hover:text-[#8b5cf6] font-medium transition-colors duration-200"
                >
                  Product
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'product' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#d9e0e1] py-2">
                    <a href="/features" className="block px-4 py-2 text-[#406266] hover:text-[#002e33] hover:bg-[#f7fbfd]">Features</a>
                    <a href="/integrations" className="block px-4 py-2 text-[#406266] hover:text-[#002e33] hover:bg-[#f7fbfd]">Integrations</a>
                    <a href="/pricing" className="block px-4 py-2 text-[#406266] hover:text-[#002e33] hover:bg-[#f7fbfd]">Pricing</a>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('solutions')}
                  className="flex items-center text-gray-700 hover:text-[#8b5cf6] font-medium transition-colors duration-200"
                >
                  Solutions
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#d9e0e1] py-2">
                    <a href="/procurement" className="block px-4 py-2 text-[#406266] hover:text-[#002e33] hover:bg-[#f7fbfd]">Procurement</a>
                    <a href="/ap-automation" className="block px-4 py-2 text-[#406266] hover:text-[#002e33] hover:bg-[#f7fbfd]">AP Automation</a>
                    <a href="/expense-management" className="block px-4 py-2 text-[#406266] hover:text-[#002e33] hover:bg-[#f7fbfd]">Expense Management</a>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('customers')}
                  className="flex items-center text-gray-700 hover:text-[#8b5cf6] font-medium transition-colors duration-200"
                >
                  Customers
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'customers' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#d9e0e1] py-2">
                    <a href="/case-studies" className="block px-4 py-2 text-[#406266] hover:text-[#002e33] hover:bg-[#f7fbfd]">Case Studies</a>
                    <a href="/testimonials" className="block px-4 py-2 text-[#406266] hover:text-[#002e33] hover:bg-[#f7fbfd]">Testimonials</a>
                    <a href="/industries" className="block px-4 py-2 text-[#406266] hover:text-[#002e33] hover:bg-[#f7fbfd]">Industries</a>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('resources')}
                  className="flex items-center text-gray-700 hover:text-[#8b5cf6] font-medium transition-colors duration-200"
                >
                  Resources
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#d9e0e1] py-2">
                    <a href="/blog" className="block px-4 py-2 text-[#406266] hover:text-[#002e33] hover:bg-[#f7fbfd]">Blog</a>
                    <a href="/webinars" className="block px-4 py-2 text-[#406266] hover:text-[#002e33] hover:bg-[#f7fbfd]">Webinars</a>
                    <a href="/guides" className="block px-4 py-2 text-[#406266] hover:text-[#002e33] hover:bg-[#f7fbfd]">Guides</a>
                  </div>
                )}
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-6">
              <a href="/pricing" className="text-gray-700 hover:text-[#8b5cf6] font-medium transition-colors duration-200">
                Pricing
              </a>
              <a href="/login" className="text-gray-700 hover:text-[#8b5cf6] font-medium transition-colors duration-200">
                Login
              </a>
              <a 
                href="/get-started" 
                className="bg-[#8b5cf6] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7c3aed] transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Book a demo
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-[#8b5cf6] focus:outline-none focus:text-[#8b5cf6] transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                              <a href="/product" className="block px-3 py-2 text-gray-700 hover:text-[#8b5cf6] font-medium">Product</a>
                <a href="/solutions" className="block px-3 py-2 text-gray-700 hover:text-[#8b5cf6] font-medium">Solutions</a>
                <a href="/customers" className="block px-3 py-2 text-gray-700 hover:text-[#8b5cf6] font-medium">Customers</a>
                <a href="/resources" className="block px-3 py-2 text-gray-700 hover:text-[#8b5cf6] font-medium">Resources</a>
                <a href="/pricing" className="block px-3 py-2 text-gray-700 hover:text-[#8b5cf6] font-medium">Pricing</a>
                <a href="/login" className="block px-3 py-2 text-gray-700 hover:text-[#8b5cf6] font-medium">Login</a>
                <a 
                  href="/get-started" 
                  className="block mx-3 mt-4 bg-[#8b5cf6] text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-[#7c3aed] transition-all duration-200"
                >
                  Book a demo
                </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 