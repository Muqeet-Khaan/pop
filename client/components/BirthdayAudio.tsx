import { useState, useRef, useEffect } from "react";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";

export function BirthdayAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        src="https://assets.mixkit.co/active_storage/sfx/2460/2460-preview.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Floating Music Player Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <div
          className={`transition-all duration-300 ${
            showControls ? "w-72 bg-white rounded-2xl shadow-2xl p-6 border-2 border-party-pink" : ""
          }`}
        >
          {showControls && (
            <div className="space-y-4 animate-slide-up">
              <h3 className="font-bold text-party-purple text-center text-lg">🎵 Birthday Music</h3>

              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="w-full py-3 bg-gradient-to-r from-party-pink to-party-purple text-white font-bold rounded-xl hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Play
                  </>
                )}
              </button>

              {/* Volume Control */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-party-purple">Volume</label>
                  <button
                    onClick={toggleMute}
                    className="p-2 hover:bg-gray-100 rounded-lg transition"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-party-pink" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-party-purple" />
                    )}
                  </button>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-party-pink"
                />
              </div>

              {/* Loop Status */}
              <div className="text-center">
                <p className="text-sm text-gray-600 font-medium">🔄 Looping Enabled</p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowControls(false)}
                className="w-full py-2 text-party-purple font-semibold hover:bg-gray-100 rounded-lg transition text-sm"
              >
                Close
              </button>
            </div>
          )}

          {/* Toggle Button */}
          <button
            onClick={() => setShowControls(!showControls)}
            className={`p-4 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110 ${
              isPlaying
                ? "bg-gradient-to-r from-party-pink to-party-purple text-white animate-float"
                : "bg-white border-2 border-party-pink text-party-pink"
            }`}
            title={showControls ? "Close" : "Open Music Player"}
          >
            <Music className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
}
