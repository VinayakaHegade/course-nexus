import SearchInput from "@/components/search-input";
import { db } from "@/lib/db";
import Categories from "./_components/categories";

const SearchPage = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <section className="p-6">
        <Categories items={categories} />
        <p>This is search page</p>
      </section>
    </>
  );
};

export default SearchPage;
