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
    <div className="flights-widget-shell space-y-8">
      <style jsx global>{`
        .flights-widget-shell #tpwl-search {
          min-height: 280px !important;
          padding: 28px !important;
          border-radius: 26px !important;
          border: 1px solid rgba(150, 73, 0, 0.22) !important;
          background:
            linear-gradient(135deg, rgba(255, 246, 238, 0.96), rgba(255, 255, 255, 0.98)),
            radial-gradient(circle at top left, rgba(150, 73, 0, 0.12), transparent 34%) !important;
          box-shadow: 0 24px 80px rgba(150, 73, 0, 0.1) !important;
        }

        .flights-widget-shell #tpwl-tickets {
          border-radius: 26px !important;
          border: 1px solid rgba(150, 73, 0, 0.16) !important;
          background: #ffffff !important;
          box-shadow: 0 18px 60px rgba(150, 73, 0, 0.07) !important;
        }

        .flights-widget-shell #tpwl-search *,
        .flights-widget-shell #tpwl-tickets * {
          font-family: Cairo, Inter, Arial, sans-serif !important;
        }

        .flights-widget-shell #tpwl-search input,
        .flights-widget-shell #tpwl-search select,
        .flights-widget-shell #tpwl-search button,
        .flights-widget-shell #tpwl-search [role="button"] {
          min-height: 54px !important;
          border-radius: 14px !important;
        }

        .flights-widget-shell #tpwl-search input,
        .flights-widget-shell #tpwl-search select {
          border-color: rgba(150, 73, 0, 0.2) !important;
          color: #1c1b1b !important;
        }

        .flights-widget-shell #tpwl-search button,
        .flights-widget-shell #tpwl-search [type="submit"],
        .flights-widget-shell #tpwl-search [role="button"] {
          background: linear-gradient(135deg, #964900, #ff8000) !important;
          color: #ffffff !important;
          font-weight: 800 !important;
        }

        .flights-widget-shell #tpwl-search a,
        .flights-widget-shell #tpwl-tickets a {
          color: #964900 !important;
        }

        .flights-widget-shell [href*="hotel" i],
        .flights-widget-shell [href*="booking" i],
        .flights-widget-shell [data-tab*="hotel" i],
        .flights-widget-shell [aria-label*="hotel" i],
        .flights-widget-shell [title*="hotel" i],
        .flights-widget-shell [class*="hotel" i] {
          display: none !important;
        }

        @media (max-width: 640px) {
          .flights-widget-shell #tpwl-search {
            min-height: 340px !important;
            padding: 18px !important;
          }
        }
      `}</style>
      <div
        id="tpwl-search"
        className="min-h-[280px] rounded-[26px] border border-[#dfc1af] bg-white p-6 shadow-[0_24px_80px_rgba(150,73,0,0.1)]"
      />
      <div
        id="tpwl-tickets"
        className="min-h-[520px] rounded-[26px] border border-[#dfc1af] bg-white p-4 shadow-[0_18px_60px_rgba(150,73,0,0.07)]"
      />
    </div>
  );
}
