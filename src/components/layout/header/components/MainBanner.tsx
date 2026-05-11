import { useTranslation } from "react-i18next";
import "../styles/mainBanner.css";

export default function MainBanner() {
  const { t } = useTranslation();

  return (
    <div className="main-banner">
      <div className="banner-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/120px-Emblem_of_India.svg.png"
          alt="India emblem"
          className="emblem-logo"
        />

        <div className="banner-title">
          <h1>
            VAHAN CITIZEN
            <br />
            SERVICES
          </h1>
        </div>
      </div>

      <div className="banner-center">
        <p className="gov-label">{t("govIndia")}</p>

        <h2>{t("ministry")}</h2>
      </div>

      <div className="banner-right">
        <img src="/swachh-bharat-logo.png" alt="India Flag" className="india-flag" />
      </div>
    </div>
  );
}
