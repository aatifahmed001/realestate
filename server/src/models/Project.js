import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  location: String,
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
  areaSqft: Number,
  heroImage: String,
  images: [String],
  description: String,
  layoutImage: String,
  facilities: [String],
  coordinates: {
    lat: Number,
    lng: Number
  }
}, { timestamps: true });

export default mongoose.model('Project', ProjectSchema);
