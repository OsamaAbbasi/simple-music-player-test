import axios from 'axios';

export interface Song {
  artistId: number;
  artistName: string;
  artworkUrl100: string;
  collectionId: number;
  collectionName: string;
  trackId: number;
  trackName: string;
  previewUrl: string;
}

export async function searchArtist(artist: string): Promise<Song[]> {
  const response = await axios.get(
    `https://itunes.apple.com/search?term=${encodeURIComponent(
      artist,
    )}&entity=song&limit=25`,
  );
  return response.data.results;
}
