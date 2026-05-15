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
        .flights-widget-shell {
          width: 100%;
        }

        .flights-widget-shell #tpwl-search {
          min-height: 380px !important;
          padding: 38px !important;
          border-radius: 28px !important;
          border: 1px solid rgba(150, 73, 0, 0.28) !important;
          background:
            linear-gradient(135deg, rgba(255, 247, 240, 0.98), rgba(255, 255, 255, 0.99)),
            radial-gradient(circle at top left, rgba(255, 128, 0, 0.16), transparent 34%) !important;
          box-shadow: 0 28px 90px rgba(150, 73, 0, 0.12) !important;
          overflow: visible !important;
        }

        .flights-widget-shell #tpwl-tickets {
          min-height: 540px !important;
          border-radius: 28px !important;
          border: 1px solid rgba(150, 73, 0, 0.16) !important;
          background: #ffffff !important;
          box-shadow: 0 18px 60px rgba(150, 73, 0, 0.07) !important;
          overflow: hidden !important;
        }

        .flights-widget-shell #tpwl-search *,
        .flights-widget-shell #tpwl-tickets * {
          font-family: Cairo, Inter, Arial, sans-serif !important;
        }

        .flights-widget-shell #tpwl-search input,
        .flights-widget-shell #tpwl-search select,
        .flights-widget-shell #tpwl-search button,
        .flights-widget-shell #tpwl-search [role="button"] {
          min-height: 64px !important;
          border-radius: 16px !important;
          font-size: 15px !important;
        }

        .flights-widget-shell #tpwl-search input,
        .flights-widget-shell #tpwl-search select {
          border-color: rgba(150, 73, 0, 0.22) !important;
          background: #ffffff !important;
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

        .flights-widget-shell #tpwl-search [class*="tab" i],
        .flights-widget-shell #tpwl-search [class*="tabs" i],
        .flights-widget-shell #tpwl-search [class*="switcher" i],
        .flights-widget-shell #tpwl-search [class*="product" i],
        .flights-widget-shell #tpwl-search [class*="service" i] {
          border-color: rgba(150, 73, 0, 0.18) !important;
        }

        .flights-widget-shell [href*="hotel" i],
        .flights-widget-shell [href*="hotels" i],
        .flights-widget-shell [href*="booking" i],
        .flights-widget-shell [href*="hotellook" i],
        .flights-widget-shell [data-tab*="hotel" i],
        .flights-widget-shell [data-value*="hotel" i],
        .flights-widget-shell [data-name*="hotel" i],
        .flights-widget-shell [aria-label*="hotel" i],
        .flights-widget-shell [aria-label*="فندق" i],
        .flights-widget-shell [aria-label*="فنادق" i],
        .flights-widget-shell [title*="hotel" i],
        .flights-widget-shell [title*="فندق" i],
        .flights-widget-shell [title*="فنادق" i],
        .flights-widget-shell [class*="hotel" i],
        .flights-widget-shell [class*="hotels" i],
        .flights-widget-shell [class*="hotel" i] *,
        .flights-widget-shell [class*="hotels" i] * {
          display: none !important;
        }

        @media (max-width: 640px) {
          .flights-widget-shell #tpwl-search {
            min-height: 460px !important;
            padding: 18px !important;
          }
        }
      `}</style>
      <div
        id="tpwl-search"
        className="min-h-[380px] rounded-[28px] border border-[#dfc1af] bg-white p-8 shadow-[0_28px_90px_rgba(150,73,0,0.12)]"
      />
      <div
        id="tpwl-tickets"
        className="min-h-[540px] rounded-[28px] border border-[#dfc1af] bg-white p-4 shadow-[0_18px_60px_rgba(150,73,0,0.07)]"
      />
    </div>
  );
}
