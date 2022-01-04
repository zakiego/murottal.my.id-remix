import type { MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

export const meta: MetaFunction = () => {
  const title = "Kumpulan Murottal";
  const description = "Temukan qari kesukaanmu";
  return {
    title,
    description,
    keywords: "Murrottal",
    "twitter:image":
      "https://hqxduecuxrozqlaicqkg.supabase.in/storage/v1/object/public/qari/banner.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@zakiego",
    "twitter:site": "murottal.my.id",
    "twitter:title": "Kumpulan Murottal",
  };
};

export default function App() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

import styles from "./tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
