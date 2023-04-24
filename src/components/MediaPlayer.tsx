import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import {BlurView} from '@react-native-community/blur';

interface Props {
  song: {
    trackName: string;
    previewUrl: string;
  };
  onSongEnd: () => void;
}

const MediaPlayer: React.FC<Props> = ({song, onSongEnd}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    setIsPlaying(true);
  }, [song]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <BlurView
      style={styles.container}
      blurType="light"
      blurAmount={10}
      reducedTransparencyFallbackColor="white">
      <Text style={styles.songTitle}>{song.trackName}</Text>
      <TouchableOpacity onPress={togglePlay}>
        <Text style={styles.playPause}>{isPlaying ? '⏸️' : '▶️'}</Text>
      </TouchableOpacity>
      <Video
        source={{uri: song.previewUrl}}
        audioOnly
        controls
        paused={!isPlaying}
        onEnd={onSongEnd}
        ignoreSilentSwitch="ignore"
        playInBackground
      />
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  playPause: {
    fontSize: 50,
  },
});

export default MediaPlayer;
