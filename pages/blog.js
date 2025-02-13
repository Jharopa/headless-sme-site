import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import { getNextStaticProps } from "@faustwp/core";
import Preview from "../components/preview";

export default function Blog() {
  const { data } = useQuery(Blog.query);

  const { title: siteTitle, description: siteDescription } = data.generalSettings;
  const menuItems = data.primaryMenuItems.nodes;
  const posts = data.posts.nodes;

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />
      
      <main className="container">
        {posts.map((post) => (
          <Preview key={post.id}
          title={post.title}
          uri={post.uri}
          content={post.content}
          featuredImage={post.featuredImage.node}
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
        featuredImage {
          node {
            sourceUrl(size: THUMBNAIL)
            altText
          }
        }
        content
        id
      }
    }
  }
`;

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page: Blog,
  });
}