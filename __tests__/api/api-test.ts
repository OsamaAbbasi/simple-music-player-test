import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {searchArtist} from '../../src/api/api';

describe('searchArtist', () => {
  const mockResponse = {
    results: [
      {
        trackId: 1,
        trackName: 'Song 1',
        previewUrl: 'https://example.com/song1.mp3',
      },
      {
        trackId: 2,
        trackName: 'Song 2',
        previewUrl: 'https://example.com/song2.mp3',
      },
    ],
  };

  it('should return an array of songs when passed an artist name', async () => {
    const mock = new MockAdapter(axios);
    const artist = 'example artist';

    mock
      .onGet(
        `https://itunes.apple.com/search?term=${encodeURIComponent(
          artist,
        )}&entity=song&limit=25`,
      )
      .reply(200, mockResponse);

    const songs = await searchArtist(artist);

    expect(songs).toEqual(mockResponse.results);
  });

  it('should return an empty array when passed an empty string', async () => {
    const songs = await searchArtist('');

    expect(songs).toEqual([]);
  });
});
