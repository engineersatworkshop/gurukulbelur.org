import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Uploads a Next.js File (from FormData) to Cloudinary
 * Returns the secure URL of the uploaded file.
 */
export async function uploadFileToCloudinary(file: File, folder: string): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  // Convert buffer to data URI
  const mime = file.type;
  const encoding = 'base64';
  const base64Data = buffer.toString(encoding);
  const fileUri = `data:${mime};${encoding},${base64Data}`;

  const result = await cloudinary.uploader.upload(fileUri, {
    folder,
    // Optional: auto-detect resource type (useful if it's a PDF vs Image)
    resource_type: 'auto',
  });

  return result.secure_url;
}

export default cloudinary;
