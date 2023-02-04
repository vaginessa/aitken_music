import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => {
  if (song.hub.actions) {
    return (isPlaying && activeSong?.title === song.title ? (
      <FaPauseCircle 
        size={40}
        className='text-gray-300 hover:text-[#FF8A00]'
        onClick={handlePause}
      />
    ) : (
      <FaPlayCircle 
        size={40}
        className='text-gray-300 hover:text-[#FF8A00]'
        onClick={handlePlay}
      />
    ));
  }
};

export default PlayPause;
