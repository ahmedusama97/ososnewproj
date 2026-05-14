"use client";

import { useEffect } from "react";

const TRAVELPAYOUTS_SCRIPT_SRC =
  "https://tpwdg.com/wl_web/main.js?wl_id=17419";

export function TravelpayoutsWidget() {
  useEffect(() => {
    const existingScript = document.querySelector(
      `script[src="${TRAVELPAYOUTS_SCRIPT_SRC}"]`,
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.type = "module";
    script.src = TRAVELPAYOUTS_SCRIPT_SRC;
    script.setAttribute("nowprocket", "");
    script.setAttribute("data-noptimize", "1");
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-wpfc-render", "false");
    script.setAttribute("seraph-accel-crit", "1");
    script.setAttribute("data-no-defer", "1");
    document.head.appendChild(script);
  }, []);

  return (
    <div className="space-y-6">
      <div
        id="tpwl-search"
        className="min-h-[180px] rounded-2xl border border-[#dfc1af] bg-white p-4 shadow-[0_18px_60px_rgba(150,73,0,0.07)]"
      />
      <div
        id="tpwl-tickets"
        className="min-h-[420px] rounded-2xl border border-[#dfc1af] bg-white p-4 shadow-[0_18px_60px_rgba(150,73,0,0.07)]"
      />
    </div>
  );
}
