function Testimonials() {
    const testimonials = [
        {
            name: "Alex Reed",
            role: "CTO, TechFlow",
            text: "The quality of talent we found through Centennial is unmatched. They truly understand our tech stack.",
            stars: 5,
            img: "https://i.pravatar.cc/150?u=alex"
        },
        {
            name: "Sarah Jenkins",
            role: "HR Director, GlobalInc",
            text: "Streamlined our entire hiring process. We saved weeks of time and found the perfect fits for our roles.",
            stars: 5,
            img: "https://i.pravatar.cc/150?u=sarah"
        },
        {
            name: "Thomas Merico",
            role: "Founder, StartupX",
            text: "The pre-vetted network is a game changer. Reliable, fast, and high-quality candidates every single time.",
            stars: 5,
            img: "https://i.pravatar.cc/150?u=thomas"
        }
    ];

    return (
        <section className="py-20 lg:py-32 bg-bg-light">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-navy">Loved by teams worldwide</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                            <div className="flex text-yellow-400 mb-6 font-bold">
                                {"★".repeat(t.stars)}
                            </div>
                            <p className="text-text-muted italic mb-8 leading-relaxed">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue/20" />
                                <div>
                                    <h4 className="font-bold text-brand-navy">{t.name}</h4>
                                    <p className="text-xs text-text-muted">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
