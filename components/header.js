import { gql } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';
import style from './header.module.css';

export default function Header({ menuItems, logo }) {
  return (
    <header className={style.header}>
      <div className="container">
        <Link href="/" className={style.brand}>
          <Image
            src={logo.mediaItemUrl}
            width="64"
            height="64"
            alt="Site logo"
          />
        </Link>
        <nav className={style.nav}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link href={item.uri}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.fragments = {
  entry: gql`
    fragment HeaderFragment on RootQuery {
      primaryMenuItems: menuItems(where: { location: PRIMARY }) {
        nodes {
          id
          uri
          path
          label
          parentId
          cssClasses
          menu {
            node {
              name
            }
          }
        }
      }
      mediaItems(where: { name: "logo" }) {
        nodes {
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  `
};
