const ID = '2649382'

const callAPI = async (URL) => {
  const request = await fetch(URL, {
    method: 'GET',
    id: ID
  })
  .then(data => {
    return data.json()
  })
  return request
};

export { callAPI };