import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Play, Pause, Volume2 } from 'lucide-react';
import ayahsData from '../data/ayahs.json';

function JarPage() {
  const navigate = useNavigate();
  const [selectedEmotion, setSelectedEmotion] = useState('happy');
  const [currentAyah, setCurrentAyah] = useState(null);
  const [loading, setLoading] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioLoading, setAudioLoading] = useState(false);
  const [previousAyahId, setPreviousAyahId] = useState(null); // Track previous ayah ID
  
  const audioRef = useRef(null);
  const ayahCardRef = useRef(null);

  // Emotion data with colors matching your design
  const emotions = [
    { value: 'sad', label: 'Sad', color: '#4d5cb1' },
    { value: 'anxious', label: 'Anxious', color: '#e36e6c' },
    { value: 'happy', label: 'Happy', color: '#90cc93' },
    { value: 'grateful', label: 'Grateful', color: '#ce9642' },
    { value: 'stressed', label: 'Stressed', color: '#e0b1e8' },
    { value: 'hopeful', label: 'Hopeful', color: '#75aab1' }
  ];

  // Reset previous ayah when emotion changes
  useEffect(() => {
    setPreviousAyahId(null);
    setCurrentAyah(null);
  }, [selectedEmotion]);

  // Auto-scroll to ayah when it appears
  useEffect(() => {
    if (currentAyah && ayahCardRef.current) {
      setTimeout(() => {
        ayahCardRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }, 100);
    }
  }, [currentAyah]);

  // Handle shake jar - get random ayah (avoiding duplicates)
  const handleShakeJar = () => {
    // Stop any playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setAudioPlaying(false);
    }

    setLoading(true);

    // Simulate loading for smooth UX
    setTimeout(() => {
      const emotionAyahs = ayahsData[selectedEmotion];
      
      if (emotionAyahs && emotionAyahs.length > 0) {
        let newAyah;
        
        // If there's only 1 ayah, just show it
        if (emotionAyahs.length === 1) {
          newAyah = emotionAyahs[0];
        } 
        // If there are multiple ayahs, avoid showing the same one
        else {
          let randomIndex;
          let attempts = 0;
          const maxAttempts = 50; // Safety limit
          
          do {
            randomIndex = Math.floor(Math.random() * emotionAyahs.length);
            newAyah = emotionAyahs[randomIndex];
            attempts++;
          } while (
            newAyah.id === previousAyahId && 
            attempts < maxAttempts
          );
        }
        
        setCurrentAyah(newAyah);
        setPreviousAyahId(newAyah.id); // Store the ID of current ayah
      }
      
      setLoading(false);
    }, 800);
  };

  // Toggle audio play/pause
  const toggleAudio = () => {
    if (!currentAyah?.audioUrl) {
      alert('Audio not available for this verse');
      return;
    }

    if (!audioRef.current) {
      audioRef.current = new Audio(currentAyah.audioUrl);
      
      audioRef.current.addEventListener('loadstart', () => {
        setAudioLoading(true);
      });

      audioRef.current.addEventListener('canplay', () => {
        setAudioLoading(false);
      });

      audioRef.current.addEventListener('ended', () => {
        setAudioPlaying(false);
        audioRef.current = null;
      });

      audioRef.current.addEventListener('error', (e) => {
        setAudioLoading(false);
        setAudioPlaying(false);
        audioRef.current = null;
        console.error('Audio error:', e);
        alert('Failed to load audio. Please check your internet connection.');
      });
    }

    if (audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    } else {
      setAudioLoading(true);
      audioRef.current.play()
        .then(() => {
          setAudioPlaying(true);
          setAudioLoading(false);
        })
        .catch(err => {
          console.error('Play error:', err);
          setAudioLoading(false);
          alert('Failed to play audio. Please try again.');
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#1B5E20] mb-4">
            Ayah Jar
          </h1>
          <p className="text-xl text-gray-600">
            Select your emotion and receive a comforting verse
          </p>
        </div>

        {/* Emotion Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {emotions.map((emotion) => (
            <button
              key={emotion.value}
              onClick={() => setSelectedEmotion(emotion.value)}
              className={`px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 border-2 hover:-translate-y-0.5 hover:shadow-lg ${
                selectedEmotion === emotion.value
                  ? 'text-white shadow-md'
                  : 'bg-transparent'
              }`}
              style={{
                borderColor: emotion.color,
                backgroundColor: selectedEmotion === emotion.value ? emotion.color : 'transparent',
                color: selectedEmotion === emotion.value ? 'white' : emotion.color
              }}
            >
              {emotion.label}
            </button>
          ))}
        </div>

        {/* Shake Button */}
        <div className="text-center mb-8">
          <button
            onClick={handleShakeJar}
            disabled={loading}
            className="bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] hover:from-[#1B5E20] hover:to-[#388E3C] text-white px-12 py-4 rounded-full text-xl font-bold uppercase shadow-[0_6px_20px_rgba(46,125,50,0.3)] hover:shadow-[0_8px_25px_rgba(46,125,50,0.4)] transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Opening Jar...</span>
              </>
            ) : (
              <>
                <span>SHAKE THE JAR</span>
              </>
            )}
          </button>
        </div>

        {/* Ayah Display Card - WITH AUTO-SCROLL REF */}
        {currentAyah && (
          <div 
            ref={ayahCardRef}
            className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-10 animate-fadeIn"
          >
            {/* Arabic Text */}
            <p className="text-4xl text-[#1B5E20] text-center mb-8 leading-loose font-arabic direction-rtl font-semibold">
              {currentAyah.arabic}
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#2E7D32]"></div>
              <div className="w-2 h-2 bg-[#2E7D32] rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#2E7D32]"></div>
            </div>

            {/* Transliteration */}
            {currentAyah.transliteration && (
              <p className="text-lg text-gray-600 text-center mb-6 italic">
                {currentAyah.transliteration}
              </p>
            )}

            {/* Translation */}
            <p className="text-xl text-gray-800 text-center mb-6 leading-relaxed italic">
              "{currentAyah.translation}"
            </p>

            {/* Reference */}
            <p className="text-center text-gray-600 font-semibold mb-8">
              — {currentAyah.surah} {currentAyah.ayah}
            </p>

            {/* Audio Button */}
            {currentAyah.audioUrl && (
              <div className="flex justify-center">
                <button
                  onClick={toggleAudio}
                  disabled={audioLoading}
                  className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(46,125,50,0.3)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {audioLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading Audio...</span>
                    </>
                  ) : audioPlaying ? (
                    <>
                      <Pause className="w-5 h-5" />
                      <span>Pause Recitation</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 ml-0.5" />
                      <span>Listen to Recitation</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Audio Status Indicator */}
            {audioPlaying && (
              <div className="flex justify-center mt-4">
                <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                  <Volume2 className="w-4 h-4" />
                  <span>Playing Recitation...</span>
                </div>
              </div>
            )}

            {!currentAyah.audioUrl && (
              <p className="text-center text-gray-500 text-sm mt-4">
                Audio not available for this verse
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default JarPage;