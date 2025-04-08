import { gql } from '@apollo/client';
import Head from 'next/head';
import Header from '../components/header';
import EntryHeader from '../components/entry-header';
import Footer from '../components/footer';
import Posts from '../components/posts';
import Gallery from '../components/gallery';
import { headers } from 'next/headers';

export default async function Component(props) {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;
  const posts = props.data.posts.nodes;
  const mediaItems = props.data.mediaItems.nodes;

  const country = await headers().get('wpe-headless-country');
  const welcome_message = `Welcome to the Pawsitively Adorable - We see you are from ${country}!`;
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header siteTitle={siteTitle} menuItems={menuItems} />

      <main className="container">
        <EntryHeader title={welcome_message} tagline={siteDescription} />
        <h2>Recent Posts</h2>
        <Posts posts={posts} />

        <h2>Recent Photos</h2>
        <Gallery mediaItems={mediaItems} />
      </main>

      <Footer />
    </>
  );
}

Component.query = gql`
  ${Header.fragments.entry}
  query GetHomePage {
    ...HeaderFragment
    generalSettings {
      description
    }
    posts(first: 3) {
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
    mediaItems(first: 3) {
      nodes {
        id
        sourceUrl
        altText
      }
    }
  }
`;
