import NoteForm from '@/components/NoteForm/NoteForm';
import { getCategories } from '@/lib/api/clientApi';

const CreateNote = async () => {
  const categories = await getCategories();

  return (
    <div>
      <NoteForm categories={categories} />
    </div>
  );
};

export default CreateNote;
