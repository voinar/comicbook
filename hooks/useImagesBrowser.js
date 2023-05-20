import { useState } from 'react';

export default useImagesBrowser = () => {
  const defaultIncrement = 32; //used to increment the number of indexes when extending the seed array.
  const defaultRange = Array.from(Array(defaultIncrement).keys()).slice(1);
  const [imageIds, setImageIds] = useState(defaultRange);

  // loads more images on button press. extends the existing image array by 50 items.
  const loadMore = () => {
    const extendIndexRangeBy = imageIds.length + defaultIncrement;
    const newRange = Array.from(Array(extendIndexRangeBy).keys()).slice(1);
    setImageIds(newRange);
  };

  return { defaultIncrement, defaultRange, imageIds, setImageIds, loadMore };
};
