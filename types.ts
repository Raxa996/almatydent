export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}