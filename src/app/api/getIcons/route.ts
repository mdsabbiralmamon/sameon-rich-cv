import axios from 'axios';
import { NextResponse } from 'next/server';

async function fetchIcon(query: string): Promise<string> {
  const options = {
    method: 'GET',
    url: `https://api.iconfinder.com/v4/icons/search?query=${query}&count=10`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer X0vjEUN6KRlxbp2DoUkyHeM0VOmxY91rA6BbU5j3Xu6wDodwS0McmilLPBWDUcJ1',
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data;
    const firstIcon = data.icons && data.icons.length > 0 ? data.icons[2] : null;
    if (firstIcon) {
      return firstIcon.raster_sizes[7].formats[0].preview_url;
    }
  } catch (error) {
    console.error('Error fetching icon:', error);
  }
  return '';
}

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || 'windows 10'; // default query
  
  const words = query.split(' ');
  let previewUrl = '';

  // Try searching with decreasing number of words
  for (let i = words.length; i > 0; i--) {
    const reducedQuery = words.slice(0, i).join(' ');
    previewUrl = await fetchIcon(reducedQuery);
    if (previewUrl) {
      break;
    }
  }

  // If no results found, use default URL
  if (!previewUrl) {
    previewUrl = 'https://cdn1.iconfinder.com/data/icons/operating-system-flat-1/30/windows_10-256.png';
  }

  return NextResponse.json({ preview_url: previewUrl }, { status: 200 });
}
