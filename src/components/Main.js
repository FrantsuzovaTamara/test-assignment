import MainForm from "./MainForm";
import { Link } from "react-router-dom";

function Main({ onSubmit }) {
  return (
    <>
      <div className="main__author">
        <div className="main__avatar">ФТ</div>
        <div className="main__info">
          <h1 className="main__name">Тамара Французова</h1>
          <ul className="main__links">
            <li className="main__link-item">
              <Link
                className="main__link"
                to="https://t.me/tamara_fr"
                target="_blank"
              >
                Telegram
              </Link>
            </li>
            <li className="main__link-item">
              <Link
                className="main__link"
                to="https://github.com/FrantsuzovaTamara"
                target="_blank"
              >
                GitHub
              </Link>
            </li>
            <li className="main__link-item">
              <Link
                className="main__link"
                to="https://career.habr.com/frantsuzovatamara"
                target="_blank"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <MainForm onSubmit={onSubmit} />
    </>
  );
}

export default Main;
