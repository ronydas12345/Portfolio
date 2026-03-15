'use client';

import { useState } from 'react';
import Image from 'next/image';

interface UploadedImage {
  id: string;
  name: string;
  url: string;
  uploadedAt: Date;
}

export default function ImageUploadManager() {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      // For now, we'll create a local URL. In production, upload to a server
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage: UploadedImage = {
          id: Date.now().toString(),
          name: file.name,
          url: e.target?.result as string,
          uploadedAt: new Date()
        };
        setImages(prev => [newImage, ...prev]);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const deleteImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Images</h2>
      
      <div className="mb-8">
        <label className="block mb-4">
          <div className="flex items-center justify-center w-full px-6 py-10 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-slate-950 transition-colors">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-700">Click or drag to upload</p>
              <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
              className="hidden"
              disabled={isUploading}
            />
          </div>
        </label>
      </div>

      {isUploading && <p className="text-center text-gray-600">Uploading...</p>}

      {images.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Uploaded Images</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image) => (
              <div key={image.id} className="relative group">
                <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={image.url}
                    alt={image.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  onClick={() => deleteImage(image.id)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Delete
                </button>
                <p className="text-sm text-gray-700 mt-2 truncate">{image.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
