import { redirect } from "next/navigation";

const allowedParams = [["category", "jeans"], ["dress-style"], ["gender"]];

export default async function ShopSlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const slug = (await params).slug;

  const isAllowed = allowedParams.some(
    (allowed) => JSON.stringify(allowed) === JSON.stringify(slug),
  );

  if (!isAllowed) {
    redirect("/shop");
  }

  return (
    <div>
      <h2>Slug: {slug.map((s) => s).join("/")}</h2>
    </div>
  );
}
