import ServicePanel from "./components/ServicePanel";
import CenterBanner from "./components/CenterBanner";
import IndiaMapPanel from "./components/IndiaMapPanel";

import "./styles/mainContent.css";

export default function MainContent() {
  return (
    <main id="main-content" className="main-content">
      <div className="content-layout">
        <ServicePanel />

        <CenterBanner />

        <IndiaMapPanel />
      </div>
    </main>
  );
}
