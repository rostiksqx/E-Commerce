import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("SHOP.CO")
    .items([
      S.divider(),
      S.documentTypeListItem("clothes").title("Clothes"),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["clothes"].includes(item.getId()!),
      ),
    ]);
