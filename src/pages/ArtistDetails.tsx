import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
// @ts-ignore
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";
import { RootObject } from "../../types";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state: any) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery({ artistId });

  if (isFetchingArtistDetails)
    return <Loader title="Searching artist details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={() => {}}
        handlePlayClick={() => {}}
      />
    </div>
  );
};

export default ArtistDetails;
