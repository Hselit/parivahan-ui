import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/servicePanel.css";

import { STATES } from "../../../data/states";
import { getRtosByState } from "../../../utils/getRtosByState";

export default function ServicePanel() {
  const { t } = useTranslation();
  const [isVehicleReg, setIsVehicleReg] = useState(false);

  const [formData, setFormData] = useState({
    registrationNumber: "",
    state: "",
    rto: "",
    acceptedTerms: false,
  });

  const availableRtos = useMemo(() => {
    return getRtosByState(formData.state);
  }, [formData.state]);

  function handleChange(field: string, value: string | boolean) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  const handleFormChange = (type: "vehicle" | "authority") => {
    console.log(type);
    setIsVehicleReg(type === "vehicle");
  };

  return (
    <section className="service-panel">
      <div className="service-panel-header">{t("chooseService")}</div>

      <div className="service-types">
        <div className={`service-type ${isVehicleReg ? "active" : ""}`} onClick={() => handleFormChange("vehicle")}>
          <img src="/byregnNo.png" alt="Vehicle" className="service-icon" />
          <span>{t("vehicleRegistration")}</span>
        </div>

        <div className={`service-type ${!isVehicleReg ? "active" : ""}`} onClick={() => handleFormChange("authority")}>
          <img src="/authority.png" alt="Authority" className="service-icon" />
          <span>{t("registeringAuthority")}</span>
        </div>
      </div>

      <div className="service-form">
        <input
          type="text"
          placeholder={t("registrationPlaceholder")}
          value={formData.registrationNumber}
          onChange={(e) => handleChange("registrationNumber", e.target.value)}
          className="service-input"
          disabled={!isVehicleReg}
        />

        <select className="service-input" value={formData.state} onChange={(e) => handleChange("state", e.target.value)} disabled={isVehicleReg}>
          <option value="">{t("selectState")}</option>

          {STATES.map((state) => (
            <option key={state.code} value={state.code}>
              {state.name}
            </option>
          ))}
        </select>

        <select className="service-input" value={formData.rto} onChange={(e) => handleChange("rto", e.target.value)} disabled={isVehicleReg || !formData.state}>
          <option value="">{!formData.state ? t("noRTO") : t("selectRTO")}</option>

          {availableRtos.map((rto) => (
            <option key={rto.code} value={rto.code}>
              {rto.name}
            </option>
          ))}
        </select>

        <label className="checkbox-row">
          <input type="checkbox" checked={formData.acceptedTerms} onChange={(e) => handleChange("acceptedTerms", e.target.checked)} />

          <span>
            {t("acceptText")} <span className="policy-link">{t("privacyPolicy")}</span> {t("and")} <span className="policy-link">{t("termsOfService")}</span>
            {t("systemmsg")}
          </span>
        </label>

        <button className="proceed-btn">{t("proceed")}</button>
      </div>
    </section>
  );
}
