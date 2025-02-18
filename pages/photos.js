import { gql, useQuery } from '@apollo/client';
import { getNextStaticProps } from '@faustwp/core';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import EntryHeader from '../components/entry-header';
import Gallery from '../components/gallery';

export default function Photos() {
  const { data } = useQuery(Photos.query);

  const menuItems = data.primaryMenuItems.nodes;
  const siteTitle = data.generalSettings.title;
  const mediaItems = data.mediaItems.nodes;

  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>

      <Header siteTitle={siteTitle} menuItems={menuItems} />

      <main className="container">
        <EntryHeader title="Gallery" />
        <Gallery mediaItems={mediaItems} />
      </main>

      <Footer />
    </>
  );
}

Photos.query = gql`
  ${Header.fragments.entry}
  ${Gallery.fragments.entry}
  query GetPhotos {
    ...HeaderFragment
    ...GalleryFragment
  }
`;

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page: Photos
  });
}
