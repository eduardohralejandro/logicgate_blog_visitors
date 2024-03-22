export const htmlParser = (htmlContent: string) =>
  htmlContent.replace(/<[^>]+>/g, "");
