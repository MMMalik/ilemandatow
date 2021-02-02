import { slugId } from "../../utils";

export default async ({ resolvedData, operation, context }: any) => {
  if (operation === "create") {
    const publishedBy = resolvedData.publishedBy.map((id: string) => `"${id}"`);
    const polledBy = resolvedData.polledBy.map((id: string) => `"${id}"`);
    const { data: publisher } = await context.executeGraphQL({
      query: `query getPublishers {
          allPublishers(where: { id_in: [${publishedBy.join(",")}] } ) {
            name
          }
        }`,
    });
    const { data: pollCompany } = await context.executeGraphQL({
      query: `query getPollCompanies {
          allPollCompanies(where: { id_in: [${polledBy.join(",")}] }) {
            name
          }
        }`,
    });
    return slugId(["polledBy", "publishedBy", "publishedAt"])({
      resolvedData: {
        publishedAt: resolvedData.publishedAt,
        polledBy: pollCompany.allPollCompanies
          .map((p: any) => p.name)
          .join(" "),
        publishedBy: publisher.allPublishers.map((p: any) => p.name).join(" "),
      },
    });
  }
  return resolvedData.slug;
};
