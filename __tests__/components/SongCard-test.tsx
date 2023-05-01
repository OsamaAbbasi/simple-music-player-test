import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SongCard from '../../src/components/SongCard';

const mockSong = {
  artistId: 123,
  artistName: 'Test Artist',
  artworkUrl100: 'https://via.placeholder.com/100',
  collectionId: 456,
  collectionName: 'Test Album',
  previewUrl: 'https://example.com/test.mp3',
  trackId: 789,
  trackName: 'Test Song',
};

describe('SongCard', () => {
  it('displays song details and playing indicator correctly', () => {
    const onPressMock = jest.fn();
    const {getByText, queryByText} = render(
      <SongCard song={mockSong} onPress={onPressMock} isPlaying={true} />,
    );

    const title = getByText(mockSong.trackName);
    const artist = getByText(mockSong.artistName);
    const album = getByText(mockSong.collectionName);
    const playingIndicator = getByText('▶️');

    expect(title).toBeDefined();
    expect(artist).toBeDefined();
    expect(album).toBeDefined();
    expect(playingIndicator).toBeDefined();

    fireEvent.press(getByText(mockSong.trackName));
    expect(onPressMock).toHaveBeenCalledTimes(1);

    fireEvent.press(playingIndicator);
    expect(onPressMock).toHaveBeenCalledTimes(2);

    fireEvent.press(artist);
    expect(queryByText('▶️')).toBeNull();
  });
});
