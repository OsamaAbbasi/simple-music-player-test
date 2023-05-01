import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {SongInterface} from '../interfaces/interfaces';

interface SongCardProps {
  song: SongInterface;
  onPress: () => void;
  isPlaying: boolean;
}

const SongCard: React.FC<SongCardProps> = ({song, onPress, isPlaying}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.albumArt} source={{uri: song.artworkUrl100}} />
      <View style={styles.details}>
        <Text style={styles.title}>{song.trackName}</Text>
        <Text style={styles.artist}>{song.artistName}</Text>
        <Text style={styles.album}>{song.collectionName}</Text>
      </View>
      {isPlaying && <Text style={styles.playingIndicator}>▶️</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  albumArt: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  artist: {
    fontSize: 14,
  },
  album: {
    fontSize: 14,
    color: '#666',
  },
  playingIndicator: {
    fontSize: 20,
    marginRight: 25,
  },
});

export default SongCard;
