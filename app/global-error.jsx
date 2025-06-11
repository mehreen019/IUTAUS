"use client";

import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    // You can hook up your own error reporting service here
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error statusCode={500} title="Something went wrong" />
      </body>
    </html>
  );
}
