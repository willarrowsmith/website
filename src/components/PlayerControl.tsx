import { PlayIcon, RepeatIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon, Volume2Icon } from 'lucide-react';

const track: {
  title: string
  artist: string
  albumCover: string
} = {
  title: "Workin' Day and Night",
  artist: 'Michael Jackson',
  albumCover: "/michael.jpg"
} as const;

export default function PlayerControl() {
  return (
    <div
      className="h-20 bg-black border-t border-gray-800 flex items-center justify-between px-4">
      <div className="flex items-center space-x-4 w-1/4">
        <img
          src={track.albumCover}
          alt="Album cover"
          className="w-14 h-14" />
        <div>
          <h4 className="text-sm font-semibold">{track.title}</h4>
          <p className="text-xs text-gray-400">{track.artist}</p>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/2">
        <div className="flex items-center space-x-6 mb-2">
          <button className="text-gray-400 hover:text-white">
            <ShuffleIcon size={20} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipBackIcon size={20} />
          </button>
          <button className="bg-white rounded-full p-2">
            <PlayIcon fill="black" size={24} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipForwardIcon size={20} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <RepeatIcon size={20} />
          </button>
        </div>
        <div className="w-full flex items-center space-x-2 text-xs text-gray-400">
          <span>0:00</span>
          <div className="flex-1 h-1 bg-gray-800 rounded-full">
            <div className="w-1/3 h-full bg-white rounded-full"></div>
          </div>
          <span>3:45</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 w-1/4 justify-end">
        <Volume2Icon size={20} />
        <div className="w-24 h-1 bg-gray-800 rounded-full">
          <div className="w-1/2 h-full bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

