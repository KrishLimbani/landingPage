import { useState } from 'react';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                    </div>
                    <span className="text-xl font-bold text-brand-navy">
                        Centennial <span className="text-brand-blue">Talent Solutions</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-sm font-medium text-text-muted hover:text-brand-blue transition-colors">Home</a>
                    <a href="#" className="text-sm font-medium text-text-muted hover:text-brand-blue transition-colors">Find jobs</a>
                    <a href="#" className="text-sm font-medium text-text-muted hover:text-brand-blue transition-colors">Login</a>
                    <button className="bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-blue transition-all shadow-md">
                        Join Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-brand-navy"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Links */}
            <div className={`md:hidden bg-white border-b border-gray-100 px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 py-4' : 'max-h-0'}`}>
                <div className="flex flex-col gap-4">
                    <a href="#" className="text-sm font-medium text-text-muted">Home</a>
                    <a href="#" className="text-sm font-medium text-text-muted">Find jobs</a>
                    <a href="#" className="text-sm font-medium text-text-muted">Login</a>
                    <button className="bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold w-full">
                        Join Now
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
