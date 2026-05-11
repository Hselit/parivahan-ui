import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../../../constants/languages";
import { useState } from "react";

import "../styles/topAlertBar.css";

export default function TopAlertBar() {
  const { t } = useTranslation();

  const [fontScale, setFontScale] = useState(1);

  const increaseFont = () => {
    const next = fontScale + 0.1;

    document.body.style.zoom = String(next);

    setFontScale(next);
  };

  const decreaseFont = () => {
    const next = fontScale - 0.1;

    document.body.style.zoom = String(next);

    setFontScale(next);
  };

  return (
    <div className="top-alert-bar">
      {/* LEFT SCROLLING TEXT */}
      <div className="top-alert-marquee">
        <div className="top-alert-text">{t("marqueetext")}</div>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="top-alert-actions">
        <select className="language-select" value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
          {LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>

        <button onClick={increaseFont}>A+</button>

        <button>A</button>

        <button onClick={decreaseFont}>A-</button>

        <img src="/icon-faq.png" alt="FAQ" />

        <img src="/User_Manual.png" alt="Manual" />

        <img src="/contactUS.png" alt="Contact" />
      </div>
    </div>
  );
}
