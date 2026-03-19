export default function Projects() {
  const experiences = [
    { 
      title: 'LLM Development', 
      category: 'Scalability & UI Quality', 
      description: 'Developed multiple LLMs for diverse clients, focusing on massive scalability, premium UI quality, and robust backend integration.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop' 
    },
    { 
      title: 'Full-Stack Architecture', 
      category: 'React.js, Haskell, Node.js', 
      description: 'Built 6+ complete LLM platforms using React.js and Haskell. Integrated secure backend authentication using Node.js & MongoDB.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop' 
    },
    { 
      title: 'UI/UX Design', 
      category: 'Figma Prototyping', 
      description: 'Created responsive, user-centric interfaces. Designed high-fidelity wireframes and user flows entirely within Figma.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop' 
    },
    { 
      title: 'End-to-End Delivery', 
      category: 'Client Solutions', 
      description: 'Delivered feature-complete applications built entirely from scratch, tailored specifically to complex client needs.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop' 
    },
  ];

  return (
    <section className="bg-[#121212] py-32 px-6 md:px-12 text-white min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">AI Engineering <br className="hidden md:block" />& Development</h2>
          <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
            Specializing in AI Engineering in Computer Science. Bridging the gap between complex machine learning models and seamless, high-performance user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60 mix-blend-overlay"
                style={{ backgroundImage: `url(${exp.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent opacity-90" />
              
              <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-widest">{exp.category}</p>
                <h4 className="text-3xl font-bold mb-4">{exp.title}</h4>
                <p className="text-gray-300 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
