function Pipeline() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-brand-navy rounded-[3rem] overflow-hidden grid lg:grid-cols-2 shadow-2xl">
                    {/* Left Text */}
                    <div className="p-12 lg:p-20 flex flex-col justify-center">
                        <span className="text-brand-light font-bold tracking-widest uppercase text-sm mb-4">Pipeline Management</span>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Stay in control of your <span className="text-brand-light">hiring pipeline</span>
                        </h2>
                        <p className="text-blue-100/70 text-lg mb-10 max-w-md">
                            Managing recruitment has never been easier. Filter, track, and engage talent
                            with our intuitive dashboard built for speed.
                        </p>
                        <div>
                            <button className="bg-white text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-brand-light transition-colors">
                                Start Hiring Now
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative min-h-[400px]">
                        <img
                            src="https://centennial-talent-solutions.netlify.app/assets/recruiter-view-soOGNiRR.png"
                            alt="Hiring Pipeline Dashboard"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-transparent lg:hidden"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pipeline;
