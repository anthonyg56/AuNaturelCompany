"use client";

import Image, { ImageProps } from 'next/image';
import useImage from '@/hooks/useImage';

const fallbackImage = "https://placehold.co/600x400?text=Not+Found";

interface QueriedImageProps extends Omit<ImageProps, 'src'> {
  query: string;
}

const QueriedImage = ({ query, alt, ...props }: QueriedImageProps) => {
  const { data: imageUrl, isLoading, error } = useImage(query);

  if (isLoading) {
    return <div className="animate-pulse bg-gray-200" style={props.style} />;
  }

  if (error || !imageUrl) {
    return (
      <Image
        src={fallbackImage}
        alt={alt || `Image for ${query}`}
        {...props}
      />
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt || `Image for ${query}`}
      {...props}
    />
  );
};

export default QueriedImage;
