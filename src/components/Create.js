function Create({ children }) {
  return (
    <div className="create">
      <div className="create__passing">
        <div className="create__step create__step_pointed"></div>
        <div className="create__scale"></div>
        <div className="create__step"></div>
        <div className="create__scale"></div>
        <div className="create__step"></div>
      </div>
      <div className="create__numbers">
        <p className="create__number create__number_pointed">1</p>
        <p className="create__number">2</p>
        <p className="create__number">3</p>
      </div>
      {children}
    </div>
  );
}

export default Create;
