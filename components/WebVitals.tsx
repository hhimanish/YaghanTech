import { useEffect } from "react";
import * as webVitals from "web-vitals";

export default function WebVitals() {
  useEffect(() => {
    const sendToGA = (metric: { name: string; delta: number; id: string }) => {
      // @ts-ignore – window.gtag may be undefined during SSR
      window.gtag && window.gtag("event", metric.name, {
        event_category: "Web Vitals",
        value: Math.round(metric.name === "CLS" ? metric.delta * 1000 : metric.delta),
        event_label: metric.id,
        non_interaction: true,
      });
    };
    // Call functions using any to bypass typing issues
    (webVitals as any).getCLS(sendToGA);
    (webVitals as any).getFID(sendToGA);
    (webVitals as any).getFCP(sendToGA);
    (webVitals as any).getLCP(sendToGA);
    (webVitals as any).getTTFB(sendToGA);
  }, []);
  return null;
}
