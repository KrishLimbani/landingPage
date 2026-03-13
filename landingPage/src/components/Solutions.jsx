function Solutions() {
    const solutions = [
        { title: "IT Staffing", desc: "Expert talent for your teams.", icon: "👥" },
        { title: "Tech Strategy", desc: "Digital roadmap for success.", icon: "🎯" },
        { title: "App Dev", desc: "Modern web & mobile apps.", icon: "📱" },
        { title: "Cloud Services", desc: "Scalable cloud solutions.", icon: "☁️" },
        { title: "Product Dev", desc: "End-to-end product design.", icon: "🚀" },
        { title: "Consultancy", desc: "Expert business IT advice.", icon: "💡" },
    ];

    return (
        <section className="bg-bg-light py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Image */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-brand-blue/20 rounded-3xl blur-2xl group-hover:bg-brand-blue/30 transition-colors"></div>
                    <img
                        src="https://centennial-talent-solutions.netlify.app/assets/engineering-services-rGUvYK6u.png"
                        alt="Digital Solutions"
                        className="relative z-10 rounded-3xl shadow-2xl"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block">End-to-End Solutions</span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-navy mb-8 leading-tight">
                        Comprehensive solutions for <span className="text-brand-blue">Digital Success</span>
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {solutions.map((item, index) => (
                            <div key={index} className="flex gap-4 group">
                                <div className="w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-navy group-hover:text-brand-blue transition-colors">{item.title}</h3>
                                    <p className="text-sm text-text-muted">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Solutions;
