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
      btn.addEventListener("click", async () => {
        const code =
          pre.querySelector("code")?.textContent || pre.textContent || "";
        await navigator.clipboard.writeText(code);
        btn.textContent = "Copied!";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = "Copy";
          btn.classList.remove("copied");
        }, 2000);
      });
      pre.appendChild(btn);
    });
  }, []);

  return null;
}
