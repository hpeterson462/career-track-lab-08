module.exports = rawRequest => {
  const [method, path] = rawRequest.toString().split('\n')[0].split(' ');

  const parsed = {
    method: `${method}`,
    path: `${path}`
  };
  return parsed;
};
