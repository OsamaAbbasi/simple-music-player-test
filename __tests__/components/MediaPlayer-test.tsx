import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MediaPlayer from '../../src/components/MediaPlayer';

describe('MediaPlayer component', () => {
  const song = {
    trackName: 'test song',
    previewUrl: 'https://test.song.com',
  };

  it('should render the song title', () => {
    const {getByText} = render(
      <MediaPlayer song={song} onSongEnd={() => {}} />,
    );
    const titleText = getByText('test song');
    expect(titleText).toBeDefined();
  });

  it('should toggle the play/pause button when pressed', () => {
    const {getByText} = render(
      <MediaPlayer song={song} onSongEnd={() => {}} />,
    );
    const playPauseButton = getByText('⏸️');
    fireEvent.press(playPauseButton);
    expect(getByText('▶️')).toBeDefined();
    fireEvent.press(playPauseButton);
    expect(getByText('⏸️')).toBeDefined();
  });

  it('should call onSongEnd when the song ends', () => {
    const onSongEndMock = jest.fn();
    const {getByTestId} = render(
      <MediaPlayer song={song} onSongEnd={onSongEndMock} />,
    );
    const videoElement = getByTestId('video-element');
    fireEvent(videoElement, 'onEnd');
    expect(onSongEndMock).toHaveBeenCalledTimes(1);
  });
});
