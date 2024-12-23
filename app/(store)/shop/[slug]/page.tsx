﻿export default async function ClothesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>Clothe: {slug}</h1>
    </div>
  );
}
