// TODO: Implement GenerateStaticParams()
export default async function ShopGenderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <h1>Gender Page for {slug}</h1>
    </div>
  );
}
