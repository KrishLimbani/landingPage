function Stats() {
    const stats = [
        { label: "30 Yrs", sub: "Market Presence", bg: "bg-brand-light" },
        { label: "180+", sub: "Expert Mentors", bg: "bg-brand-blue" },
        { label: "2700+", sub: "Happy Placements", bg: "bg-brand-navy" },
    ];

    return (
        <section className="py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`${stat.bg} ${index === 0 ? 'text-brand-navy' : 'text-white'} p-10 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300`}
                    >
                        <span className="text-4xl lg:text-5xl font-extrabold mb-2">{stat.label}</span>
                        <span className="text-sm font-medium opacity-80 uppercase tracking-widest">{stat.sub}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stats;
