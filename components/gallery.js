import { gql } from '@apollo/client';
import Image from 'next/image';
import style from './gallery.module.css';

export default function Gallery({ mediaItems }) {
  return (
    mediaItems && (
      <div className={style.gallery}>
        {mediaItems.map((mediaItem) => (
          <Image
            key={mediaItem.id}
            src={mediaItem.sourceUrl}
            width={300}
            height={200}
            alt={mediaItem.altText}
          />
        ))}
      </div>
    )
  );
}

Gallery.fragments = {
  entry: gql`
    fragment GalleryFragment on RootQuery {
      mediaItems {
        nodes {
          id
          sourceUrl
          altText
        }
      }
    }
  `
};
