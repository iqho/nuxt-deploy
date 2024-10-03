import('./.output/server/index.mjs')
  .then(server => server.default())
  .catch(err => {
    console.error("Error starting server:", err);
    process.exit(1);
  });