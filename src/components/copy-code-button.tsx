"use client";
import { useEffect } from "react";

export default function CopyCodeButtons() {
  useEffect(() => {
    const pres = document.querySelectorAll<HTMLPreElement>("article pre");
    pres.forEach((pre) => {
      if (pre.querySelector(".copy-code-btn")) return;
      pre.style.position = "relative";

      const btn = document.createElement("button");
      btn.className = "copy-code-btn";
      btn.textContent = "Copy";
      btn.setAttribute("aria-label", "Copy code to clipboard");

      btn.addEventListener("click", async () => {
        const code =
          pre.querySelector("code")?.textContent || pre.textContent || "";

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(code);
          } else {
            // Fallback for non-HTTPS or older browsers
            const textarea = document.createElement("textarea");
            textarea.value = code;
            textarea.style.position = "fixed";
            textarea.style.left = "-9999px";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
          }

          btn.textContent = "Copied!";
          btn.setAttribute("aria-label", "Code copied to clipboard");
          btn.classList.add("copied");
          setTimeout(() => {
            btn.textContent = "Copy";
            btn.setAttribute("aria-label", "Copy code to clipboard");
            btn.classList.remove("copied");
          }, 2000);
        } catch {
          btn.textContent = "Failed";
          btn.classList.add("copied");
          setTimeout(() => {
            btn.textContent = "Copy";
            btn.classList.remove("copied");
          }, 2000);
        }
      });
      pre.appendChild(btn);
    });
  }, []);

  return null;
}
