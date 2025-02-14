import Image from 'next/image';
import Link from 'next/link';
import style from './preview.module.css';

export default function Preview({ title, uri, featuredImage }) {
  return (
    <Link href={uri} className={style.preview}>
      <Image
        className={style.previewImage}
        src={featuredImage.sourceUrl}
        width={300}
        height={200}
        alt={featuredImage.altText}
      />
      <h2>{title}</h2>
    </Link>
  );
}
