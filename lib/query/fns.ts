import { PEXELS_API_KEY } from "../constants";

export async function getImageUrl(query: string, defaultImage: string = "/placeholder.svg"): Promise<string> {
  const baseUrl = 'https://api.pexels.com/v1/search';

  try {
    const response = await fetch(`${baseUrl}?query=${encodeURIComponent(query)}&per_page=1`, {
      headers: {
        'Authorization': PEXELS_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.photos && data.photos.length > 0) {
      return data.photos[0].src.large;
    }

    return defaultImage;
  } catch (error) {
    console.error('Error fetching image:', error);
    return defaultImage;
  }
}