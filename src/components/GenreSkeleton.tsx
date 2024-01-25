import { Stack, Skeleton } from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
  return (
    <Stack>
      <Skeleton height="40px" marginTop="10px" />
    </Stack>
  );
};

export default GenreSkeleton;
