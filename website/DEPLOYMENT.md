# Netlify deployment notes

The repository root [netlify.toml](../netlify.toml) sets the Netlify base to `website`, builds with `npm run build`, and publishes `dist`. The build emits one HTML document for every public route, a custom `404.html`, and a sitemap generated from the same route list. Netlify's SPA catch-all rewrite has been removed. Pretty URLs are disabled so the slashless canonical paths in the pages and sitemap remain the final URLs.

## Domain settings to confirm in Netlify

In **Site configuration → Domain management → Production domains**, confirm `https://alisondaytherapy.com` is the primary domain and `www.alisondaytherapy.com` is assigned as an alias. The checked-in redirect rules send HTTP and HTTPS requests for `www` directly to the HTTPS apex domain.

The tested address `alisondaytherapy.netlify.app` returned a Netlify 404 before these changes. The repository includes redirects for that hostname, but Netlify only applies domain-specific redirects to domains assigned to the site. Confirm that exact hostname is listed as a production domain/alias; if the site's generated Netlify hostname differs, replace the two `.netlify.app` source hostnames in `netlify.toml` with the hostname shown in Domain management. Then check the four host variants after deployment and confirm `http://www` reaches the apex in one permanent redirect.

The live deployment is not changed by this repository update. After deploying, verify the static route responses and domain redirects at the production URLs.
