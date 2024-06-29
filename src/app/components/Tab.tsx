import { fetchCategories } from '@/libs/microcms';
import { Category } from '@/type/types';
import Link from 'next/link';
import React from 'react'

const Tab = async ({ categoryId }: { categoryId?: string }) => {
  const { contents } = await fetchCategories();
  const categories: Category[] = contents;

  if (!categories || categories.length === 0) {
    return (
      <h1 className="text-center text-xl font-semibold mt-8">No categories</h1>
    );
  }
  return (
    <div className=" mb-2">
      <div className="sm:block">
        <nav className="flex gap-6" aria-label="Tabs">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/home/category/${category.id}`}
              className={`
                ${categoryId === category.id
                  ? " shrink-0  p-2 text-sm font-medium text-blue-700 "
                  : "shrink-0 p-2 text-sm font-medium text-gray-400 hover:text-blue-700 hover:cursor-pointer `"
                }`}
            >
              {`#${category.name}`}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Tab