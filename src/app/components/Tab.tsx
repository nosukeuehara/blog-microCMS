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
    <div>
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">Tab</label>

        {/* <select id="Tab" className="w-full rounded-md border-gray-200">
          <option>Settings</option>
          <option>Messages</option>
          <option>Archive</option>
          <option>Notifications</option>
        </select> */}
      </div>

      <div className="hidden sm:block">
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