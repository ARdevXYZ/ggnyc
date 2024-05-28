import { getCategories } from '#/app/api/categories/getCategories';
// import { ClickCounter } from '#/ui/click-counter';
// import { TabGroup } from '#/ui/tab-group';
import React from 'react';

const title = 'Guiding Principles';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <div className="space-y-9">
      <div>{children}</div>
    </div>
  );
}
