import NoteList from '@/components/NoteList/NoteList';
import { getNotes } from '@/lib/api';

const Notes = async () => {
  const notes = await getNotes();
  console.log(notes);

  return (
    <section>
      <h1>Notes</h1>
      {notes?.notes?.length > 0 && <NoteList notes={notes.notes} />}
    </section>
  );
};

export default Notes;

// ('use client');

// import NoteList from '@/components/NoteList/NoteList';
// import { getNotes, Note } from '@/lib/api';
// import { useState } from 'react';

// const Notes = () => {
//   const [notes, setNotes] = useState<Note[]>([]);

//   const handleClick = async () => {
//     const res = await getNotes();
//     if (res?.notes) {
//       setNotes(res.notes);
//     }
//   };

//   console.log(notes);

//   return (
//     <section>
//       <h1>Notes Lis</h1>
//       <button onClick={handleClick}>Get my notes</button>
//       {notes.length > 0 && <NoteList notes={notes} />}
//     </section>
//   );
// };

// export default Notes;
