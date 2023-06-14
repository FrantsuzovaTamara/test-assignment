import { NavLink } from "react-router-dom";
import error from "../images/popup__error.svg";
import success from "../images/popup__success.svg";

function Popup({ isOpen, isError }) {
  console.log(isOpen, isError)
  return (
    <>
      <div className={`popup${isOpen ? " popup_opened" : ""}`}>
        <div className={`popup__content${isError ? "" : " popup__content_success"}`}>
          <div className={`popup__block${isError ? "" : " popup__block_success"}`}>
            <h1 className="popup__title">{isError ? "Ошибка" : "Форма успешно отправлена"}</h1>
            {isError ? <button className="popup__close-button" type="button"></button> : ""}
          </div>
          <img className="popup__image" src={isError ? error : success} alt="icon" />
          <NavLink
            className="popup__button"
            to={isError ? "" : "/test-assignment/"}
          >
            {isError ? "Закрыть" : "На главную"}
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Popup;
