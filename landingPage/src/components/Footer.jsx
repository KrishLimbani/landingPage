function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                                <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                            </div>
                            <span className="text-xl font-bold text-brand-navy">
                                Centennial <span className="text-brand-blue">Talent</span>
                            </span>
                        </div>
                        <p className="text-text-muted max-w-xs mb-8">
                            Empowering individuals and organizations to reach their full potential through
                            strategic talent solutions and innovative technology.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-text-muted hover:bg-brand-blue hover:text-white transition-all">𝕏</a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-text-muted hover:bg-brand-blue hover:text-white transition-all">in</a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-text-muted hover:bg-brand-blue hover:text-white transition-all">fb</a>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="font-bold text-brand-navy mb-6 uppercase tracking-wider text-xs">Platform</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Find Jobs</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Post a Talent</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Career Advice</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Salary Tools</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="font-bold text-brand-navy mb-6 uppercase tracking-wider text-xs">Resources</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li><a href="#" className="hover:text-brand-blue transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-10 flex flex-col md:row-reverse md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-text-muted">© {new Date().getFullYear()} Centennial Talent Solutions. All rights reserved.</p>
                    <div className="flex gap-8 text-sm text-text-muted">
                        <a href="#" className="hover:text-brand-blue transition-colors">English</a>
                        <a href="#" className="hover:text-brand-blue transition-colors">Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
