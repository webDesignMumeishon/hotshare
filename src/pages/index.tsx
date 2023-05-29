import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Categories from '@/components/Categories';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Card from '@/components/Card';
import { api } from '@/api/api';
import { Category, Daum } from '@/api/airbnbdata';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

type ElementProps = {
  category: Category[];
  listing: Daum[];
};

export default function HomePage({ category, listing }: ElementProps) {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      {/* Header component */}
      <Header placeholder='Anywhere' />

      <main>
        <Categories categories={category} />
        <section>
          <div className='grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
            {listing?.map((item) => {
              return <Card key={item?.info?.id} data={item}></Card>;
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const category = await api.getCategories();
  const listing = await api.getData({ filter: null });
  return {
    props: {
      category,
      listing,
    },
  };
}
