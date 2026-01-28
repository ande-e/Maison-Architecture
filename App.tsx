
import React from 'react';
import Header from './components/Header';
import CustomCursor from './components/CustomCursor';
import AbstractGeometry from './components/AbstractGeometry';
import ProjectCard from './components/ProjectCard';
import RevealText from './components/RevealText';
import { Project, Service } from './types';

// Mock Data
const projects: Project[] = [
  { id: 1, title: "The Silent Villa", category: "Residential", year: "2024", location: "Kyoto, Japan", image: "https://picsum.photos/800/1200?random=1" },
  { id: 2, title: "Void Tower", category: "Commercial", year: "2023", location: "New York, USA", image: "https://picsum.photos/800/1200?random=2" },
  { id: 3, title: "Mono Museum", category: "Cultural", year: "2023", location: "Berlin, Germany", image: "https://picsum.photos/800/1200?random=3" },
  { id: 4, title: "Aeon Center", category: "Research", year: "2022", location: "Seoul, Korea", image: "https://picsum.photos/800/1200?random=4" },
];

const services: Service[] = [
  { id: 1, title: "Architectural Design", code: "01", description: "Form finding through rigorous data analysis and structural purity." },
  { id: 2, title: "Interior Spatial", code: "02", description: "Designing volumes of light and shadow, not just rooms." },
  { id: 3, title: "Urban Planning", code: "03", description: "Systems thinking applied to the chaotic fabric of the city." },
];

const App: React.FC = () => {
  return (
    <div className="bg-stone text-ink min-h-screen selection:bg-int-orange selection:text-stone overflow-x-hidden">
      <CustomCursor />
      <Header />

      <main className="pt-20 border-l border-r border-ink/10 max-w-[95vw] mx-auto bg-stone relative">
        
        {/* HERO SECTION */}
        <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-12 border-b border-ink/10 relative">
          {/* Decorative Grid Lines Vertical */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-[1px] bg-ink/10"></div>
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-[1px] bg-ink/10"></div>

          <div className="col-span-1 md:col-span-8 p-8 md:p-16 flex flex-col justify-center relative z-10">
            <RevealText delay={200}>
               <h2 className="font-sans text-xs tracking-[0.3em] text-int-orange mb-4 font-bold">EST. 2024 — ARCHITECTURE & ANALYSIS</h2>
            </RevealText>
            
            {/* Split H1 for staggered animation */}
            <div className="font-serif text-7xl md:text-9xl leading-[0.9] mb-8">
              <RevealText delay={500}>
                <span>FORM</span>
              </RevealText>
              
              {/* Shifted left and significantly increased padding (px-32) to fix clipping of script swashes */}
              <div className="ml-8 md:ml-32 lg:ml-48 my-4">
                <RevealText delay={1200}>
                  <div className="py-4 px-32">
                    <span className="font-script text-6xl md:text-8xl lowercase block">follows</span>
                  </div>
                </RevealText>
              </div>

              <RevealText delay={1900}>
                <span>DATA.</span>
              </RevealText>
            </div>

            <RevealText delay={2200}>
              <p className="font-sans text-sm md:text-base max-w-md leading-relaxed opacity-80 border-l-2 border-int-orange pl-6 mt-8">
                We strip away the decorative to reveal the structural truth. 
                Using advanced analytics to inform brutalist, minimal, and sustainable design.
              </p>
            </RevealText>
          </div>

          <div className="col-span-1 md:col-span-4 border-t md:border-t-0 md:border-l border-ink/10 flex items-center justify-center bg-stone overflow-hidden relative">
            <div className="absolute top-4 right-4 font-mono text-[10px] text-ink/40">SYS.ANALYSIS.V2</div>
            <AbstractGeometry className="w-64 h-64 md:w-96 md:h-96" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest mb-2 opacity-50">
                <span>Load</span>
                <span>100%</span>
              </div>
              <div className="h-[2px] w-full bg-ink/10">
                <div className="h-full bg-int-orange w-full animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY TICKER */}
        <div className="border-b border-ink/10 overflow-hidden py-4 whitespace-nowrap bg-ink text-stone">
           <div className="animate-marquee inline-block">
             {[...Array(5)].map((_, i) => (
               <span key={i} className="mx-8 font-sans text-sm tracking-[0.2em] uppercase">
                 Radical Simplification <span className="text-int-orange mx-4">•</span> 
                 Structural Honesty <span className="text-int-orange mx-4">•</span> 
                 Engineered Aesthetics <span className="text-int-orange mx-4">•</span>
               </span>
             ))}
           </div>
        </div>

        {/* SELECTED WORK */}
        <section id="work" className="border-b border-ink/10">
          <div className="p-8 md:p-16 border-b border-ink/10 flex justify-between items-end">
            <RevealText>
              <h2 className="font-serif text-5xl md:text-6xl">Selected <span className="italic">Works</span></h2>
            </RevealText>
            <span className="hidden md:block font-sans text-xs tracking-widest opacity-50">2020 — 2024</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* SERVICES / DATA */}
        <section id="studio" className="grid grid-cols-1 md:grid-cols-12 border-b border-ink/10">
          <div className="col-span-1 md:col-span-4 p-8 md:p-16 border-b md:border-b-0 md:border-r border-ink/10 bg-stone">
             <h3 className="font-sans text-xs tracking-widest uppercase mb-8 opacity-50">Capabilities</h3>
             <h2 className="font-serif text-4xl leading-tight mb-8">
               We design for <br/> the <span className="italic text-int-orange">essential</span>.
             </h2>
             <AbstractGeometry className="w-32 h-32 opacity-20" />
          </div>
          <div className="col-span-1 md:col-span-8">
            {services.map((service) => (
              <div key={service.id} className="group border-b border-ink/10 last:border-b-0 p-8 md:p-12 hover:bg-ink hover:text-stone transition-colors duration-700 ease-in-out hover-trigger flex flex-col md:flex-row gap-8 items-start md:items-center">
                <span className="font-mono text-xs text-int-orange border border-int-orange/20 px-2 py-1 rounded-full">{service.code}</span>
                <div className="flex-1">
                  <h3 className="font-serif text-3xl mb-2">{service.title}</h3>
                  <p className="font-sans text-sm max-w-lg opacity-60 group-hover:opacity-80 transition-opacity duration-700 ease-in-out">{service.description}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5"/>
                   </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-ink text-stone p-8 md:p-24 relative overflow-hidden">
           {/* Big typographic footer */}
           <div className="relative z-10">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
               <div>
                 <h4 className="font-sans text-xs tracking-widest text-int-orange mb-8 uppercase">Contact</h4>
                 <a href="mailto:hello@maison.arch" className="block font-serif text-4xl md:text-5xl hover:italic hover:text-int-orange transition-all duration-700 ease-in-out hover-trigger mb-4">
                   hello@maison.arch
                 </a>
                 <p className="font-sans text-sm opacity-50">
                   10010, New York, NY <br/>
                   5th Avenue, Suite 900
                 </p>
               </div>
               <div className="flex flex-col justify-between">
                 <div className="flex gap-8">
                    {['Instagram', 'LinkedIn', 'Behance'].map(social => (
                      <a key={social} href="#" className="font-sans text-xs tracking-widest uppercase hover:text-int-orange transition-colors duration-500 ease-out hover-trigger">{social}</a>
                    ))}
                 </div>
               </div>
             </div>

             <div className="border-t border-stone/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
               <span className="font-mono text-[10px] opacity-40">MAISON ARCHITECTURE © 2024</span>
               <span className="font-mono text-[10px] opacity-40">DESIGNED BY AI.ENGINEER</span>
             </div>
           </div>

           {/* Background decorative element */}
           <div className="absolute right-[-10%] bottom-[-20%] opacity-5 pointer-events-none">
              <h1 className="font-serif text-[20rem] leading-none text-stone">M</h1>
           </div>
        </footer>

      </main>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
