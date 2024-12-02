// TODO: Implement GenerateStaticParams()
export default async function ShopDressStylePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <h1>Dress Style Page</h1>
    </div>
  );
}
