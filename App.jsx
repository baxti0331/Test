import { useEffect } from "react";
import Card from "./components/Card";
import "./styles.css";

export default function App() {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg) {
      tg.ready();
      tg.expand();

      tg.setHeaderColor("#0f172a");
      tg.setBackgroundColor("#0b1220");

      tg.MainButton.setText("Отправить");
      tg.MainButton.show();

      tg.MainButton.onClick(() => {
        tg.sendData(JSON.stringify({ action: "premium_click" }));
      });
    }
  }, []);

  return (
    <div className="app">
      <div className="header">
        <h1>Premium Mini App</h1>
        <p>Telegram-style UI + Motion One</p>
      </div>

      <Card />

      <div className="glass-panel">
        <button className="premium-btn">Действие</button>
        <button className="premium-btn secondary">Настройки</button>
      </div>
    </div>
  );
}