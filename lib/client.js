import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// create a sanity client

export const client = sanityClient({
  projectId: "ahyekzjz",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

// use the client
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
