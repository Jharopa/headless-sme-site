import Image from 'next/image';
import Link from 'next/link';
import style from './preview.module.css';

export default function Preview({
  title,
  uri,
  featuredImage,
  author,
  readTime
}) {
  return (
    <Link href={uri} className={style.preview}>
      <Image
        className={style.previewImage}
        src={featuredImage.sourceUrl}
        width={300}
        height={200}
        alt={featuredImage.altText}
      />
      <div className={style.previewContent}>
        <h2>{title}</h2>
        {author && readTime && (
          <div>
            By {author} | {readTime} read
          </div>
        )}
      </div>
    </Link>
  );
}
