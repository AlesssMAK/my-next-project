import { Note } from '@/lib/api/clientApi';
import Link from 'next/link';
import css from './NoteItem.module.css';

type Props = {
  item: Note;
};

const NoteItem = ({ item }: Props) => {
  return (
    <li className={css.item}>
      <Link href={`/notes/${item.id}`}>{item.title}</Link>
    </li>
  );
};

export default NoteItem;
