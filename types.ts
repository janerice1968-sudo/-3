
export interface InspirationResult {
  title: string;
  description: string;
  elements: string[];
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
}

export enum NavigationSection {
  Home = 'home',
  Philosophy = 'philosophy',
  Gallery = 'gallery',
  Experience = 'experience'
}
