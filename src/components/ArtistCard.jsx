import { useNavigate } from "react-router-dom";
import { noArtistArt } from '../assets';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col w-[250px] p-4 bg-opacity-100 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer" onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}>
      <img alt="artist" src={track?.images ? track?.images?.coverart : noArtistArt} className="w-full h-56" />
      <p className="mt-4 font-semibold text-lg text-white truncate hover:text-[#FF8A00]">{track?.subtitle}</p>
    </div>
  );
};

export default ArtistCard;
