const getCroppedImageUrl = (
  url: string,
  width: number = 600,
  height: number = 400
): string => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;

  if (index < target.length) {
    // Handle the case where the target string is not found
    console.error(`Target "${target}" not found in the URL "${url}"`);
    return url;
  }

  const baseUrl = url.slice(0, index);
  const cropParams = `crop/${width}/${height}/`;

  return `${baseUrl}${cropParams}${url.slice(index)}`;
};

export default getCroppedImageUrl;
