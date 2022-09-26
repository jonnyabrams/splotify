import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

import { RootObject } from "../../types";

interface IProps {
  isPlaying: boolean;
  activeSong: RootObject;
  song: RootObject;
  handlePause: () => void;
  handlePlay: () => void;
}

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}: IProps) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;
