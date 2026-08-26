const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "bangalorekitchenequipments.in") {
      url.hostname = "www.bangalorekitchenequipments.in";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/workflow" || url.pathname === "/workflow.html") {
      url.pathname = "/blog";
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);

    Object.entries(securityHeaders).forEach(([key, value]) => headers.set(key, value));

    if (url.pathname.startsWith("/assets/")) {
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
    } else if (url.pathname.endsWith(".html") || headers.get("content-type")?.includes("text/html")) {
      headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
