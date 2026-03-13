function FooterCTA() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto bg-gradient-to-br from-brand-navy to-brand-blue rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                <div className="relative z-10 max-w-2xl mx-auto">
                    <p className="text-blue-200 font-medium mb-6">Over 2000+ developers and 300+ companies shaping the future with us.</p>
                    <h2 className="text-4xl lg:text-6xl font-extrabold mb-10 leading-tight">Ready to take the next step in your career?</h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button className="bg-white text-brand-navy px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-light transition-all shadow-xl hover:scale-105 active:scale-95">
                            Get Started For Free
                        </button>
                        <a href="#" className="font-bold border-b-2 border-white pb-1 hover:text-brand-light hover:border-brand-light transition-all">
                            Contact our team →
                        </a>
                    </div>
                </div>

                {/* Decorative Circles */}
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full"></div>
                <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-brand-light/10 rounded-full"></div>
            </div>
        </section>
    );
}

export default FooterCTA;
