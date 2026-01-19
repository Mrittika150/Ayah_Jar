import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';


function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Floating Animation CSS */}
      <style>{`
        @keyframes float-1 {
          0%, 100% {
            transform: rotate(-12deg) translateX(-25px) translateY(0px);
          }
          50% {
            transform: rotate(-12deg) translateX(-25px) translateY(-15px);
          }
        }

        @keyframes float-2 {
          0%, 100% {
            transform: rotate(8deg) translateX(20px) translateY(0px);
          }
          50% {
            transform: rotate(8deg) translateX(20px) translateY(-12px);
          }
        }

        @keyframes float-3 {
          0%, 100% {
            transform: rotate(-6deg) translateX(-15px) translateY(0px);
          }
          50% {
            transform: rotate(-6deg) translateX(-15px) translateY(-15px);
          }
        }

        @keyframes float-4 {
          0%, 100% {
            transform: rotate(10deg) translateX(18px) translateY(0px);
          }
          50% {
            transform: rotate(10deg) translateX(18px) translateY(-10px);
          }
        }

        @keyframes float-5 {
          0%, 100% {
            transform: rotate(-4deg) translateX(-8px) translateY(0px);
          }
          50% {
            transform: rotate(-4deg) translateX(-8px) translateY(-13px);
          }
        }

        .float-animation-1 {
          animation: float-1 3s ease-in-out infinite;
        }

        .float-animation-2 {
          animation: float-2 3.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .float-animation-3 {
          animation: float-3 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        .float-animation-4 {
          animation: float-4 3.8s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .float-animation-5 {
          animation: float-5 3.3s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center py-16 bg-gradient-to-br from-[#f0f7f4] to-[#e8f5e9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-[#1B5E20] leading-tight">
                Find Comfort in Divine Words
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed font-normal">
                A digital jar filled with Quranic verses for every emotion. 
                Let the words of Allah bring peace to your heart.
              </p>

              <div className="flex gap-5 flex-wrap">
                <Link to="/jar">
                  <button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-9 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(46,125,50,0.3)] flex items-center gap-2">
                    <span>Open the Jar</span>
                    
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side - Glass Jar Illustration */}
            <div className="relative h-[500px] flex items-center justify-center">
              <div className="relative w-[320px] h-[450px] flex flex-col items-center">
                
                {/* Jar Lid with better styling */}
                <div className="relative w-[140px] h-[35px] bg-gradient-to-b from-[#e8c547] via-[#d4af37] to-[#b8992d] rounded-t-[70px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.3)] z-20 border-b-2 border-[#a88b28]">
                  {/* Lid Knob */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-3 bg-gradient-to-b from-[#f5e6a8] to-[#e8c547] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2)]"></div>
                  {/* Lid rim detail */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-b from-[#b8992d] to-[#9d7f24] rounded-b-[70px]"></div>
                </div>

                {/* Glass Jar Body - More realistic glass effect */}
                <div className="relative w-[260px] h-[400px] -mt-[8px] rounded-[25px_25px_90px_90px] overflow-hidden border-[4px] border-white/70 shadow-[0_15px_50px_rgba(0,0,0,0.15),inset_-12px_0_24px_rgba(255,255,255,0.6),inset_12px_0_24px_rgba(0,0,0,0.08),inset_0_-20px_40px_rgba(200,230,200,0.3)]"
                     style={{
                       background: 'linear-gradient(120deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 30%, rgba(240,250,245,0.7) 50%, rgba(255,255,255,0.85) 70%, rgba(255,255,255,0.95) 100%)',
                       backdropFilter: 'blur(2px)'
                     }}>
                  
                  {/* Glass shine effect - left side */}
                  <div className="absolute left-4 top-10 bottom-20 w-6 bg-gradient-to-r from-white/60 to-transparent rounded-full blur-sm pointer-events-none"></div>
                  
                  {/* Glass shine effect - right side */}
                  <div className="absolute right-4 top-10 bottom-20 w-4 bg-gradient-to-l from-white/40 to-transparent rounded-full blur-sm pointer-events-none"></div>

                  {/* Zigzag Stacked Papers Container */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 pb-16">
                    
                    {/* Paper 1 - Top */}
                    <div 
                      className="w-[85px] h-[65px] bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center border-2 border-gray-100 mb-[-5px] transition-transform hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] float-animation-1"
                      style={{ 
                        zIndex: 5
                      }}
                    >
                      <img 
                        src={icon1} 
                        alt="Icon 1" 
                        className="w-6 h-6 object-contain"
                        style={{ imageRendering: 'crisp-edges' }}
                      />
                    </div>

                    {/* Paper 2 */}
                    <div 
                      className="w-[85px] h-[65px] bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center border-2 border-gray-100 mb-[-5px] transition-transform hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] float-animation-2"
                      style={{ 
                        zIndex: 4
                      }}
                    >
                      <img 
                        src={icon2} 
                        alt="Icon 2" 
                        className="w-6 h-6 object-contain"
                        style={{ imageRendering: 'crisp-edges' }}
                      />
                    </div>

                    {/* Paper 3 - Middle */}
                    <div 
                      className="w-[85px] h-[65px] bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center border-2 border-gray-100 mb-[-5px] transition-transform hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] float-animation-3"
                      style={{ 
                        zIndex: 3
                      }}
                    >
                      <img 
                        src={icon3} 
                        alt="Icon 3" 
                        className="w-6 h-6  object-contain"
                        style={{ imageRendering: 'crisp-edges' }}
                      />
                    </div>

                    {/* Paper 4 */}
                    <div 
                      className="w-[85px] h-[65px] bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center border-2 border-gray-100 mb-[-5px] transition-transform hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] float-animation-4"
                      style={{ 
                        zIndex: 2
                      }}
                    >
                      <img 
                        src={icon4} 
                        alt="Icon 4" 
                        className="w-6 h-6 object-contain"
                        style={{ imageRendering: 'crisp-edges' }}
                      />
                    </div>

                    {/* Paper 5 - Bottom */}
                    <div 
                      className="w-[85px] h-[65px] bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center border-2 border-gray-100 transition-transform hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] float-animation-5"
                      style={{ 
                        zIndex: 1
                      }}
                    >
                      <img 
                        src={icon5} 
                        alt="Icon 5" 
                        className="w-6 h-6 object-contain"
                        style={{ imageRendering: 'crisp-edges' }}
                      />
                    </div>
                  </div>

                 
                  {/* Bottom glass reflection */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/40 to-transparent rounded-b-[90px] pointer-events-none"></div>
                </div>

                {/* Jar Label - MOVED OUTSIDE JAR */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/98 px-7 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.12)] text-center border border-gray-100 backdrop-blur-sm z-30">
                  <p className="text-sm text-[#2E7D32] font-bold m-0 tracking-wide">
                    Quranic Wisdom
                  </p>
                  <p className="text-xs text-gray-500 mt-1 m-0 font-medium">
                    Verses of Comfort & Guidance
                  </p>
                </div>

                {/* Shadow below jar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-4 bg-black/10 rounded-full blur-xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-[#1B5E20] mb-20">
            How It Works
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
            
            {/* Step 1 */}
            <div className="flex-1 text-center p-12 pt-14 rounded-[20px] bg-gradient-to-br from-white to-gray-50 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-[400ms] hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(46,125,50,0.2)] hover:border-[rgba(46,125,50,0.2)] border-2 border-transparent min-h-[320px] relative group hover:bg-gradient-to-br hover:from-white hover:to-[#e8f5e9]">
              
              {/* Number Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[50px] h-[50px] bg-gradient-to-br from-[#2E7D32] to-[#388E3C] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-[0_4px_15px_rgba(46,125,50,0.4)] border-4 border-white">
                1
              </div>

              {/* Icon */}
              <div className="my-8 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-[70px] h-[70px] text-[#2E7D32] mx-auto group-hover:text-[#1B5E20] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="9" cy="9.5" r="1.5"/>
                  <circle cx="15" cy="9.5" r="1.5"/>
                  <path d="M8 14.5s1.5 2 4 2 4-2 4-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-[#1B5E20] mb-4">
                Choose Emotion
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Select how you're feeling - sad, anxious, happy, or grateful
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex-1 text-center p-12 pt-14 rounded-[20px] bg-gradient-to-br from-white to-gray-50 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-[400ms] hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(46,125,50,0.2)] hover:border-[rgba(46,125,50,0.2)] border-2 border-transparent min-h-[320px] relative group hover:bg-gradient-to-br hover:from-white hover:to-[#e8f5e9]">
              
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[50px] h-[50px] bg-gradient-to-br from-[#2E7D32] to-[#388E3C] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-[0_4px_15px_rgba(46,125,50,0.4)] border-4 border-white">
                2
              </div>

              <div className="my-8 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-[70px] h-[70px] text-[#2E7D32] mx-auto group-hover:text-[#1B5E20] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-[#1B5E20] mb-4">
                Shake the Jar
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Click to randomly select a comforting Quranic verse
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex-1 text-center p-12 pt-14 rounded-[20px] bg-gradient-to-br from-white to-gray-50 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-[400ms] hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(46,125,50,0.2)] hover:border-[rgba(46,125,50,0.2)] border-2 border-transparent min-h-[320px] relative group hover:bg-gradient-to-br hover:from-white hover:to-[#e8f5e9]">
              
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[50px] h-[50px] bg-gradient-to-br from-[#2E7D32] to-[#388E3C] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-[0_4px_15px_rgba(46,125,50,0.4)] border-4 border-white">
                3
              </div>

              <div className="my-8 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-[70px] h-[70px] text-[#2E7D32] mx-auto group-hover:text-[#1B5E20] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h10v12z"/>
                  <path d="M3 6v13c0 1.1.9 2 2 2h13v-2H5V6H3z"/>
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-[#1B5E20] mb-4">
                Receive Ayah
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Get a meaningful verse with translation and audio
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;