import { gql, useQuery } from '@apollo/client';
import { getNextStaticProps } from '@faustwp/core';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import EntryHeader from '../components/entry-header';
import Posts from '../components/posts';

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

      <main className="container">
        <EntryHeader title="Posts" />
        <Posts posts={posts} />
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

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page: Blog
  });
}
