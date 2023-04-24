import React, {useState} from 'react';
import {TextInput, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {searchArtist} from './api/api';
import SongCard from './components/SongCard';
import MediaPlayer from './components/MediaPlayer';

interface Song {
  trackId: number;
  trackName: string;
  artistName: string;
  albumName: string;
  artworkUrl100: string;
  previewUrl: string;
}

const App: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [playerVisible, setPlayerVisible] = useState<boolean>(false);

  const handleSearch = async (text: string) => {
    const results = await searchArtist(text);
    setSongs(results);
    setCurrentSong(null);
    setPlayerVisible(false);
  };

  const handleSongPress = (song: Song) => {
    setCurrentSong(song);
    setPlayerVisible(true);
  };

  const handleSongEnd = () => {
    setCurrentSong(null);
    setPlayerVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for an artist..."
        onSubmitEditing={event => handleSearch(event.nativeEvent.text)}
      />
      <FlatList
        data={songs}
        renderItem={({item}) => (
          <SongCard
            song={item}
            onPress={() => handleSongPress(item)}
            isPlaying={currentSong && currentSong.trackId === item.trackId}
          />
        )}
        keyExtractor={item => item.trackId.toString()}
      />
      {playerVisible && currentSong && (
        <MediaPlayer song={currentSong} onSongEnd={handleSongEnd} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    borderRadius: 5,
  },
});

export default App;
