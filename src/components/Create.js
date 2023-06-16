import { useLocation } from "react-router-dom";

function Create({ children }) {
  const location = useLocation();
  return (
    <div className="create">
      <div className="create__passing">
        <div
          className={`create__step${
            location.pathname !== "/test-assignment/create"
              ? " create__step_passed"
              : " create__step_pointed"
          }`}
        ></div>
        <div
          className={`create__scale${
            location.pathname !== "/test-assignment/create"
              ? " create__scale_passed"
              : ""
          }`}
        ></div>
        <div
          className={`create__step${
            location.pathname === "/test-assignment/create/step2"
              ? " create__step_pointed"
              : location.pathname !== "/test-assignment/create"
              ? " create__step_passed"
              : ""
          }`}
        ></div>
        <div
          className={`create__scale${
            location.pathname === "/test-assignment/create/step3"
              ? " create__scale_passed"
              : ""
          }`}
        ></div>
        <div
          className={`create__step${
            location.pathname === "/test-assignment/create/step3"
              ? " create__step_pointed"
              : ""
          }`}
        ></div>
      </div>
      <div className="create__numbers">
        <p className="create__number create__number_pointed">1</p>
        <p
          className={`create__number${
            location.pathname === ("/test-assignment/create/step2" ||
            "/test-assignment/create/step3")
              ? " create__number_pointed"
              : ""
          }`}
        >
          2
        </p>
        <p
          className={`create__number${
            location.pathname === "/test-assignment/create/step3"
              ? " create__number_pointed"
              : ""
          }`}
        >
          3
        </p>
      </div>
      {children}
    </div>
  );
}

export default Create;
