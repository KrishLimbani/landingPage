function Hero() {
    return (
        <section className="pt-32 lg:pt-48 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative z-10">
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-navy leading-tight mb-6">
                        Connect <br />
                        with <span className="text-brand-blue">Elite</span> <br />
                        Talent <br />
                        Instantly.
                    </h1>
                    <p className="text-lg text-text-muted mb-10 max-w-lg leading-relaxed">
                        Recruitment agencies directly connect with Elite Solutions.
                        From SMBs to Fortune, we find the highest quality talent
                        for the jobs of the future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="btn-primary">Explore Careers</button>
                        <button className="btn-secondary">Post a Talent</button>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img
                            src="https://centennial-talent-solutions.netlify.app/assets/hero-bg-bJJJ3eRP.png"
                            alt="Elite Talent Network"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
