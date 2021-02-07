const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "co0n96cc",
  dataset: "production",
  token: "", // or leave blank to be anonymous user
  useCdn: false,
});

module.exports = client;
