import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { noCoverArt } from '../assets';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();
  
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className='flex flex-col w-[250px] p-4 bg-opacity-100 backdrop-blur-sm animate-slideup rounded-lg cursor-default'>
      <div className='relative w-full h-56 group'>
        {song.hub.actions ? (
          <div className={`absolute inset-0 justify-center items-center bg-[#000000] bg-opacity-50 cursor-pointer group-hover:flex  ${activeSong?.title === song.title ? 'flex bg-[#000000] bg-opacity-70' : 'hidden'}`}>
            <PlayPause 
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={song}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
          </div>
        ) : null}
        
        <img alt='song_img' src={song.images ? song.images?.coverart : noCoverArt} />
      </div>

      <div className='flex justify-between'>
        <div className='mt-3 flex flex-col lg:max-w-[220px] max-w-[150px]'>
          {song.hub.actions ? (
            <p className='font-semibold text-lg text-white hover:text-[#FF8A00] truncate'>
              <Link to={`/songs/${song?.key}`}>
                {song.title}
              </Link>
            </p>
          ) : (
            <p className='font-semibold text-lg text-white truncate cursor-default'>
                {song.title}
            </p>
          )}
          
          {song.artists ? (
            <p className='text-sm truncate text-gray-300 hover:text-[#5C5C5C] mt-1'>
              <Link to={`/artists/${song?.artists[0]?.adamid}`}>
                {song.subtitle}
              </Link>
            </p>
          ) : (
            <p className='text-sm truncate text-gray-300 cursor-default mt-1'>
                {song.subtitle}
            </p>
          )}
        </div>
        <div className='md:hidden pt-5 n'>
          <PlayPause 
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={song}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
        </div>
      </div>
    </div>
  );
};

export default SongCard;
