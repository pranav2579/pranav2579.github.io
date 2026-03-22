"use client";

import { Printer, Download } from "lucide-react";

const btnClass =
  "inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-edge bg-card text-muted hover:text-heading hover:border-heading/20 transition-colors cursor-pointer";

export function PrintButton() {
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => window.print()} className={btnClass}>
        <Printer className="w-4 h-4" />
        Print
      </button>
      <button onClick={() => window.print()} className={btnClass}>
        <Download className="w-4 h-4" />
        Download PDF
      </button>
    </div>
  );
}
