module.exports = rawRequest => {
  const [method, path] = rawRequest.toString().split('\n')[0].split(' ');

  const body = rawRequest.toString().split('\n')[4];

  const parsed = {
    method: `${method}`,
    path: `${path}`,
    body: body
  };

  return parsed;
};
