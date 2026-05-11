import { useState } from "react";
import { useTranslation } from "react-i18next";

import "../styles/actionMenu.css";

export default function ActionMenu() {
   const { t } = useTranslation();

  const [registrationOpen, setRegistrationOpen] =
    useState(false);

  const [adminOpen, setAdminOpen] =
    useState(false);

  return (
    <div className="action-menu">

      <button className="menu-btn">
  {t("nav.knowpaymenttransaction")}
      </button>

      <button className="menu-btn">
        {t("nav.verifyReceipt")}
      </button>

      <button className="menu-btn active">
          {t("nav.clickfeedback")}
      </button>

      {/* Registration Dropdown */}
      <div
        className="dropdown-wrapper"
        onMouseEnter={() =>
          setRegistrationOpen(true)
        }
        onMouseLeave={() =>
          setRegistrationOpen(false)
        }
      >
        <button className="menu-btn dropdown-btn">
            {t("nav.applynewregis")}
          <span className="dropdown-arrow">
            ▼
          </span>
        </button>

        {registrationOpen && (
          <div className="dropdown-menu">
            <a href="#">
                {t("nav.nocVehicle")}
            </a>
            <a href="#">
                  {t("nav.regVehicle")}
            </a>
          </div>
        )}
      </div>

      {/* Admin Dropdown */}
      <div
        className="dropdown-wrapper admin-wrapper"
        onMouseEnter={() =>
          setAdminOpen(true)
        }
        onMouseLeave={() =>
          setAdminOpen(false)
        }
      >
        <button className="menu-btn admin-btn dropdown-btn">
            {t("nav.adminuser")}
          <span className="dropdown-arrow">
            ▼
          </span>
        </button>

        {adminOpen && (
          <div className="dropdown-menu admin-dropdown">
            <a href="#">
                {t("nav.appointmentLogin")}
            </a>

            <a href="#">
                {t("nav.helpDeskLogin")}
            </a>

            <a href="#">
                  {t("nav.rtoLogin")}
            </a>

          </div>
        )}
      </div>

    </div>
  );
}