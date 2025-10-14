/* PATCH: fix-missing-google-review-widget
 * Changed by: assistant
 * Date: 2025-10-14
 * Purpose: Re-enable Google Reviews widget on both mobile & desktop.
 * REVERT: Replace this file with the REVERT-BELOW section to restore previous version.
 */

import React, { useEffect } from "react";

export default function ReviewsWidget() {
  useEffect(() => {
    // Dynamically load Featurable script only once
    const scriptId = "featurable-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://featurable.com/assets/bundle.js";
      script.defer = true;
      script.charset = "UTF-8";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      className="w-full flex justify-center items-center py-12 px-4 bg-[#23292E] bg-opacity-60 backdrop-blur-md"
      id="reviews-section"
    >
      <div
        id="featurable-dfa25f22-0248-40c7-9ef8-b58432f0f799"
        data-featurable-async
        className="w-full max-w-5xl rounded-2xl shadow-lg overflow-hidden"
        style={{
          minHeight: "500px",
          backgroundColor: "rgba(35,41,46,0.85)",
        }}
      ></div>
    </section>
  );
}

/* REVERT-BELOW: previous empty ReviewsWidget.jsx (placeholder)
import React from "react";
export default function ReviewsWidget() { return null; }
*/
