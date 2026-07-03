import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/site/CookieBanner";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-paper px-6 py-20">
      <div className="max-w-md text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-3">404</p>
        <h1 className="text-5xl font-extrabold tracking-tight text-navy text-balance">
          That page took a <span className="text-teal">PTO day.</span>
        </h1>
        <p className="mt-4 text-navy/60">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/" className="bg-navy text-white font-bold px-5 py-3 rounded-full text-sm">Go home</Link>
          <Link to="/contact" className="bg-teal text-navy font-bold px-5 py-3 rounded-full text-sm">Book a free call</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Helios Assistants — Dedicated Overseas Virtual Assistants, Fully Managed" },
      { name: "description", content: "We recruit, train, and fully manage premium overseas virtual assistants for US founders. Flat monthly retainer. Instant replacement guarantee." },
      { property: "og:title", content: "Helios Assistants — Dedicated Overseas Virtual Assistants, Fully Managed" },
      { property: "og:description", content: "We recruit, train, and fully manage premium overseas virtual assistants for US founders. Flat monthly retainer. Instant replacement guarantee." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Helios Assistants" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Helios Assistants — Dedicated Overseas Virtual Assistants, Fully Managed" },
      { name: "twitter:description", content: "We recruit, train, and fully manage premium overseas virtual assistants for US founders. Flat monthly retainer. Instant replacement guarantee." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/43214ec5-3869-4668-ae36-21176f8bc5e3/id-preview-19536eae--ef12a80e-0a5b-42b4-9766-a002bd11d2cf.lovable.app-1780539029161.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/43214ec5-3869-4668-ae36-21176f8bc5e3/id-preview-19536eae--ef12a80e-0a5b-42b4-9766-a002bd11d2cf.lovable.app-1780539029161.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Helios Assistants",
              description:
                "Fully managed dedicated overseas virtual assistants for US founders and operators.",
              areaServed: "US",
              knowsAbout: [
                "Virtual Assistants",
                "Executive Assistants",
                "Offshore Staffing",
                "Delegation",
              ],
            },
            {
              "@type": "WebSite",
              name: "Helios Assistants",
              potentialAction: {
                "@type": "SearchAction",
                target: "/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-paper text-navy">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <CookieBanner />
        <Toaster richColors position="top-center" />
      </div>
    </QueryClientProvider>
  );
}