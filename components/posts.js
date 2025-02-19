import Image from 'next/image';
import Link from 'next/link';
import style from './posts.module.css';
import getReadTime from '../utilities/readTime';

export default function Posts({ posts }) {
  return (
    <div className={style.posts}>
      {posts.map((post) => {
        var readTime = getReadTime(post.content);

        return (
          <Link key={post.id} href={post.uri} className={style.post}>
            <Image
              className={style.featuredImage}
              src={post.featuredImage.node.sourceUrl}
              width={300}
              height={200}
              alt={post.featuredImage.node.altText}
            />
            <div className={style.postContent}>
              <h2>{post.title}</h2>
              {post.author.node.name && readTime && (
                <div>
                  By {post.author.node.name} | {readTime} read
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page: Blog
  });
}
