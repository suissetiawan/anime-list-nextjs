const getAnimeResponse = async (resource, query) => {
  const responses = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await responses.json();
  return anime;
};

const getEntryAnimeResponse = async (resource, obj) => {
  const responses = await getAnimeResponse(resource);
  return responses.data.flatMap((item) => item[obj]);
};

const makeRandomData = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;
  const responses = {
    data: data.slice(first, last),
  };

  return responses;
};

export { getAnimeResponse, getEntryAnimeResponse, makeRandomData };
