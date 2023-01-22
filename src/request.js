const callAPI = async (PATH) => {
  const request = await fetch(process.env.REACT_APP_BASE_URL + PATH + `?key=${process.env.REACT_APP_API_KEY}`, {
    method: 'GET',
    id: process.env.REACT_APP_ID,
  }).then((data) => data.json());
  return request;
};

export { callAPI };
