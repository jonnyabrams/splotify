import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { Error, Loader, SongCard } from "../components";
// @ts-ignore
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";
import { RootObject } from "../../types";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state: any) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  // from https://geo.ipify.org/
  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_9xW95GTYl5RW6NAaabywwZuaS5pv6`
      )
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [country]);

  if (isFetching && loading)
    return <Loader title="Loading songs around you..." />;

  // && country to be sure it exists and it's not an empty string
  if (error && country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around You
        <span className="font-black text-sm ml-3">({country})</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song: RootObject, i: number) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default AroundYou;
