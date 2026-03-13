function ValueProps() {
    const props = [
        {
            title: "Global Outreach",
            desc: "Connect with talent and opportunities across the globe with our extensive network.",
            icon: "🌐"
        },
        {
            title: "Pre-Vetted Network",
            desc: "Every candidate and company is thoroughly vetted to ensure quality and reliability.",
            icon: "✅"
        },
        {
            title: "Rapid Delivery",
            desc: "Fast-track your hiring or job search with our streamlined, efficient platform.",
            icon: "⚡"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                {props.map((prop, index) => (
                    <div key={index} className="p-8 rounded-3xl border border-gray-100 hover:border-brand-blue hover:shadow-2xl transition-all duration-300 group">
                        <div className="w-14 h-14 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                            {prop.icon}
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-4">{prop.title}</h3>
                        <p className="text-text-muted leading-relaxed">{prop.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ValueProps;
