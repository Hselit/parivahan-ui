import "./footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <img src="../../../src/assets/nic-logo.png" alt="NIC" className="footer-logo" />

        <div className="footer-text">
          <p>{t("footer.line1")}</p>
          <p>{t("footer.line2")}</p>
          <p>{t("footer.line3")}</p>
          <p>{t("govIndia")}</p>
        </div>
      </div>
    </footer>
  );
}
