import css from './layoutNotes.module.css';

interface NotesLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

const NotesLayout = ({ children, sidebar }: NotesLayoutProps) => {
  return (
    <section className={css.section}>
      <aside className={css.aside}>{sidebar}</aside>
      <div className={css.content}>{children}</div>
    </section>
  );
};

export default NotesLayout;
