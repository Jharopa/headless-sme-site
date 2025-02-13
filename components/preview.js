import Image from "next/image";
import Link from "next/link";

export default function Preview({ title, uri, content, featuredImage}) {
  return(
    <div>
      <Link href={uri}>
        <Image 
          src={featuredImage.sourceUrl} 
          width={150}
          height={150}
          alt={featuredImage.altText}
        />
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Link>
    </div>
  );
}