"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Eye } from "lucide-react";

export function ViewCounter({
  slug,
  initialViews,
}: {
  slug: string;
  initialViews: number;
}) {
  // The page is statically rendered and revalidated every 60s, so
  // initialViews can be stale; the RPC returns the authoritative count.
  const [views, setViews] = useState(initialViews);

  // StrictMode runs effects twice in development, and this one has a
  // side effect on the server. Without the guard every dev page load
  // would count as two reads.
  const counted = useRef(false);

  useEffect(() => {
    if (counted.current) return;
    counted.current = true;

    createClient()
      .rpc("increment_post_views", { post_slug: slug })
      .then(({ data, error }) => {
        if (!error && typeof data === "number") setViews(data);
      });
  }, [slug]);

  return (
    <div className="flex items-center gap-1.5">
      <Eye className="w-3.5 h-3.5" />
      <span>{views.toLocaleString()} views</span>
    </div>
  );
}
