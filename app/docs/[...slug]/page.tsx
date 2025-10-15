type DocsPageProps = {
  params: { slug: string[] };
};

const DocsPage = ({ params }: DocsPageProps) => {
  const slug = params.slug;

  return (
    <div>
      <h1>Docs page</h1>
      <p>Current path: {slug?.join(' / ') || 'home'}</p>
    </div>
  );
};

export default DocsPage;
