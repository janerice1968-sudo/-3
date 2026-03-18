
export interface Streamer {
  id: string;
  name: string;
  age: number;
  location: string;
  imageUrl: string;
  isLive: boolean;
  viewers: number;
  category: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}
