import { useEffect, useRef } from "react";
import { RootObject } from "../../../types";

interface IProps {
  activeSong: RootObject;
  isPlaying: boolean;
  volume: number | string;
  seekTime: number;
  onEnded: () => void;
  onTimeUpdate: any;
  onLoadedData: any;
  repeat: boolean;
  currentIndex?: number;
}

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}: IProps) => {
  const ref = useRef<any>(null);
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
