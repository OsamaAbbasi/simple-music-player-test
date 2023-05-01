import axios from 'axios';
import {SongInterface} from '../interfaces/interfaces';

export const searchArtist = async (
  artist: string,
): Promise<SongInterface[]> => {
  const response = await axios.get(
    `https://itunes.apple.com/search?term=${encodeURIComponent(
      artist,
    )}&entity=song&limit=25`,
  );
  return response.data.results;
};
