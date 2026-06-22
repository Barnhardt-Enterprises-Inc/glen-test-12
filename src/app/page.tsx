import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Build your next big idea <span className="text-blue-600 dark:text-blue-400">faster</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              A modern, responsive starting point for your Next.js application. 
              Leveraging Tailwind CSS v4 for high-performance styling and 
              App Router for optimal routing and rendering.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#features" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
              >
                Explore Features
              </a>
              <a 
                href="https://nextjs.org/docs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 font-semibold rounded-lg transition-all duration-200"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-1/2 h-full bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl -z-0" />
      </section>

      {/* Generic Content / Features Section */}
      <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why choose this stack?</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Combining the best of modern web development to give you a 
              seamless developer experience and lightning-fast performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">App Router</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Utilize server components and streaming for faster initial page loads and a better user experience.
              </p>
            </div>
            
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Tailwind v4</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Next-generation CSS-in-JS experience with better performance, smaller bundles, and simplified configuration.
              </p>
            </div>
            
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Fully optimized for every screen size, from mobile devices to large desktop monitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 text-center text-slate-500 dark:text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Next.js Homepage. Built with passion and precision.</p>
        </div>
      </footer>
    </div>
  );
}
