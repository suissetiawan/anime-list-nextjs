const getAnimeResponse = async (resource, query) => {
  const responses = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await responses.json();
  return anime;
};

export { getAnimeResponse };
