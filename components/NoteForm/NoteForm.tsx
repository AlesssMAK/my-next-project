'use client';

import { useNoteDraftStore } from '@/app/lib/stores/noteStore';
import { Category, createNote, NewNoteData } from '@/lib/api/clientApi';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

type Props = {
  categories: Category[];
};

const NoteForm = ({ categories }: Props) => {
  const router = useRouter();

  const { draft, setDraft, clearDraft } = useNoteDraftStore();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setDraft({
      ...draft,
      [event.target.name]: event.target.value,
    });
  };

  const handleCancel = () => router.push('/notes/filter/all');

  const { mutate } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      clearDraft();
      router.push('/notes/filter/all');
    },
  });

  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData) as NewNoteData;
    mutate(values);
  };

  return (
    <form action={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          name="title"
          defaultValue={draft?.title}
          onChange={handleChange}
        />
      </label>

      <label>
        Content
        <textarea
          name="content"
          defaultValue={draft?.content}
          onChange={handleChange}
        ></textarea>
      </label>

      <label>
        Category
        <select
          name="categoryId"
          defaultValue={draft?.categoryId}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </label>

      <div>
        <button type="submit">Create</button>
        <button
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
