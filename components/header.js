import { gql } from '@apollo/client';
import Link from 'next/link';
import style from './header.module.css';

export default function Header({ siteTitle, menuItems }) {
  return (
    <header className={style.header}>
      <div>
        <Link href="/" className={style.brand}>
          <h2 className={style.siteTitle}>{siteTitle}</h2>
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
      generalSettings {
        title
      }
    }
  `
};
