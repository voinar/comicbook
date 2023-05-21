import { Text, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';

interface QueryError {
  message: string;
}

// Used to fetch data via useQuery. Can be either used to render a list on images inside MainView and/or fetch a single image and its data inside the ComicDetails page.
const useThumbnailImage = (imageId: number) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['imageThumbnails', imageId],
    queryFn: () =>
      fetch(`https://xkcd.com/${imageId}/info.0.json`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) return <ActivityIndicator size="large" color="#00ff00" />;
  if (error)
    return (
      <Text>An error has occurred: + {(error as QueryError).message}</Text>
    );

  return { isLoading, error, data, imageId };
};

export default useThumbnailImage;
