import { gql } from '@apollo/client';
import Head from 'next/head';
import Header from '../components/header';
import EntryHeader from '../components/entry-header';
import Footer from '../components/footer';

export default function Component(props) {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header siteTitle={siteTitle} menuItems={menuItems} />

      <main className="container">
        <EntryHeader
          title="Welcome to the Pawsitively Adorable"
          tagline={siteDescription}
        />
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
  }
`;
