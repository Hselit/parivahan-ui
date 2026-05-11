import TopAlertBar from "./components/TopAlertBar";
import MainBanner from "./components/MainBanner";
import ActionMenu from "./components/ActionMenu";

import "./styles/header.css";

export default function Header() {
  return (
    <header>
      <TopAlertBar />

      <MainBanner />

      <ActionMenu />
    </header>
  );
}
