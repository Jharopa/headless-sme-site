import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import { getNextStaticProps } from '@faustwp/core';
import Preview from '../components/preview';
import style from '../styles/blog.module.css';

export default function Blog() {
  const { data } = useQuery(Blog.query);
  const menuItems = data.primaryMenuItems.nodes;
  const siteTitle = data.generalSettings.title;
  const posts = data.posts.nodes;

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <Header siteTitle={siteTitle} menuItems={menuItems} />

      <main className={style.posts}>
        {posts.map((post) => (
          <Preview
            key={post.id}
            title={post.title}
            uri={post.uri}
            featuredImage={post.featuredImage.node}
            author={post.author.node.name}
            readTime={getReadTime(post.content)}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}

Blog.query = gql`
  ${Header.fragments.entry}
  query GetPosts {
    ...HeaderFragment
    posts {
      nodes {
        uri
        title
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        id
        author {
          node {
            name
          }
        }
      }
    }
  }
`;

function getWordCount(content) {
  return content
    .replace(/<[^>]+>/g, '')
    .trim()
    .split(/\s+/).length;
}

function getReadTime(content) {
  var wordCount = getWordCount(content);
  var readTime = wordCount / 250;
  return readTime < 1 ? '< 1 min' : Math.round(readTime) + ' min';
}

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page: Blog
  });
}
