 export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Force www
    if (url.hostname === "bangalorekitchenequipments.in") {
      url.hostname = "www.bangalorekitchenequipments.in";
      return Response.redirect(url.toString(), 301);
    }

    // Future dynamic routes
    if (
      url.pathname.startsWith("/products/") ||
      url.pathname.startsWith("/services/") ||
      url.pathname.startsWith("/bangalore/") ||
      url.pathname.startsWith("/industries/") ||
      url.pathname.startsWith("/guides/")
    ) {
      return env.ASSETS.fetch(request);
    }

    return env.ASSETS.fetch(request);
  }
};
