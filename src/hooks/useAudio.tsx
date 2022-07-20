import { useCallback, useEffect, useRef, useState } from "react";

export const useAudio = (url: string) => {
  const audio = useRef(new Audio(url));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audio.current) {
      if (playing) {
        audio.current.play()
      } else {
        audio.current.pause()
      }
    }

    return () => {
      if (audio.current) {
        audio.current.pause()
      }
    }
  }, [playing]);

  const togglePlaying = useCallback(() => {
    setPlaying(!playing);
  }, [playing]);

  return {
    playing,
    togglePlaying
  };
};
