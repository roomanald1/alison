export default async function canonicalPath(
  request: Request,
  context: { next: () => Promise<Response> },
) {
  const url = new URL(request.url);

  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "");
    return Response.redirect(url, 301);
  }

  return context.next();
}
