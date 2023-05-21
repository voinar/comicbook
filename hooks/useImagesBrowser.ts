import { useState } from 'react';

// Used to populate the carousel with images.
const useImagesBrowser = () => {
  const defaultIncrement = 32; // Used to increment the number of indexes when extending the seed array.
  const defaultRange = Array.from(Array(defaultIncrement).keys()).slice(1);
  const [imageIds, setImageIds] = useState(defaultRange);

  // Loads more images on button press. extends the existing image array by 50 items.
  const loadMore = () => {
    const extendIndexRangeBy = imageIds.length + defaultIncrement;
    const newRange = Array.from(Array(extendIndexRangeBy).keys()).slice(1);
    setImageIds(newRange);
  };

  return { defaultIncrement, defaultRange, imageIds, setImageIds, loadMore };
};

export default useImagesBrowser;
