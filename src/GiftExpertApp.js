import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExperApp = () => {

  const [categories, setCategories] = useState(['Samurai x']);

  return (
    <>
      <h2>GiftExperApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map(category =>
            <GifGrid
              category={category}
              key={category}
            />
          )
        }
      </ol>
    </>
  )
}
