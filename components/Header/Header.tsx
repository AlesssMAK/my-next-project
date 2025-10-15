// components/Header/Header.tsx

import Link from 'next/link';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import css from './Header.module.css';

const Header = async () => {
  return (
    <header className={css.header}>
      <Link
        href="/"
        aria-label="Home"
      >
        NoteHub
      </Link>
      <nav
        aria-label="Main Navigation"
        className={css.navigation}
      >
        <ul className={css.nav_list}>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {/* Нові посилання */}
          <li>
            <CategoriesMenu />
          </li>
          <li>
            <Link href="/sign-in">Login</Link>
          </li>
          <li>
            <Link href="/sign-up">Register</Link>
          </li>
          <AuthNavigation />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
