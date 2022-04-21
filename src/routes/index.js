import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "lqz08o01",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true
});

export async function get() {
  const data = await client.fetch(`*[_type == "pet"]`);

  if (data) {
    return {
      status: 200,
      body: {
        pets: data
      }
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}
