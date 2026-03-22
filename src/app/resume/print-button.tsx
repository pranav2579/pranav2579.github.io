"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-edge bg-card text-muted hover:text-heading hover:border-heading/20 transition-colors cursor-pointer"
    >
      <Printer className="w-4 h-4" />
      Print / Save as PDF
    </button>
  );
}
