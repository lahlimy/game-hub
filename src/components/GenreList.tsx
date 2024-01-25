import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  if (error) return null;

  return (
   

      <List>
              {error && <Text>{error}</Text>}
         {isLoading &&
          Skeletons.map((Skeleton) => (
            <GenreSkeleton key={Skeleton} />
            ))}
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
  );
};

export default GenreList;
