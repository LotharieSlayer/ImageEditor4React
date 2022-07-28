import React from 'react';
import { ImageDrawing } from "./components/image-drawing/ImageDrawing";
export const App = () => {

  const fileLink = `https://images.unsplash.com/photo-1581609836630-9007630f7a7b`;
  const fileName = `Example`;

  return (
    <>
      <ImageDrawing
        fileLink={fileLink}
        fileName={fileName}
      />
    </>
  );
};
