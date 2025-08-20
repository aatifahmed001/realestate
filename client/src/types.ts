export type Project = {
  _id: string;
  title: string;
  slug: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  areaSqft: number;
  heroImage: string;
  images: string[];
  description: string;
  layoutImage: string;
  facilities: string[];
};
