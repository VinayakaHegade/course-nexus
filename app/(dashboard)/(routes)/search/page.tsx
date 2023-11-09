import { db } from "@/lib/db";
import Categories from "./_components/categories";

const SearchPage = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <section className="p-6">
      <Categories items={categories} />
      <p>This is search page</p>
    </section>
  );
};

export default SearchPage;
