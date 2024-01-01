type CoinDescriptionProps = {
  description: string;
};

function CoinDescription({ description }: CoinDescriptionProps) {
  return (
    <section className="bg-gray-0 col-span-2 dark:bg-gray-850 rounded-md p-4">
      <h2>Description</h2>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </section>
  );
}

export default CoinDescription;
