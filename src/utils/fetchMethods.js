const fetchMethod = (method) => async (uri, body, token) => {
  const requestOptions = {
    method,
    ...((method === 'POST' || 'PATCH') &&
      body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Api-Token': token }),
    },
  };

  try {
    const fetchResponse = await fetch(uri, requestOptions);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const fetchGet = fetchMethod('GET');
export const fetchPost = fetchMethod('POST');
export const fetchPatch = fetchMethod('PATCH');
export const fetchDelete = fetchMethod('DELETE');
