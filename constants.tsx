
import React from 'react';
import { Streamer, Testimonial } from './types';

export const STREAMERS: Streamer[] = [
  {
    id: '1',
    name: 'Isabella',
    age: 24,
    location: 'Miami, FL',
    imageUrl: 'https://i.ibb.co/WWp05kN4/1092a951-697c-4cfd-a12d-584a344ed350.png',
    isLive: true,
    viewers: 1240,
    category: 'Sensual Chat'
  },
  {
    id: '2',
    name: 'Julian',
    age: 28,
    location: 'Los Angeles, CA',
    imageUrl: 'https://i.ibb.co/yB7zPXZ5/469a2c58-a9ea-41b5-830b-3ca1878fc575.png',
    isLive: true,
    viewers: 850,
    category: 'Private Shows'
  },
  {
    id: '3',
    name: 'Sophia',
    age: 22,
    location: 'New York, NY',
    imageUrl: 'https://i.ibb.co/4Zw6L9F7/460ab5a4-90d9-443a-88a5-ce4741222b22.png',
    isLive: false,
    viewers: 0,
    category: 'Dating'
  },
  {
    id: '4',
    name: 'Marcus',
    age: 31,
    location: 'Austin, TX',
    imageUrl: 'https://i.ibb.co/gK7FhPk/455bcd06-ac64-4dfb-b4e5-228a2dba4fd8.png',
    isLive: true,
    viewers: 2100,
    category: 'Group Live'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "The most discrete and high-end platform I've used. The community here is actually real.",
    author: "David R.",
    role: "Premium Member"
  },
  {
    id: 't2',
    quote: "The stream quality is unmatched. It feels like you're in the room with them.",
    author: "Elena M.",
    role: "Frequent Viewer"
  }
];
