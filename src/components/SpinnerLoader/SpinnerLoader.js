import "./SpinnerLoader.css";

export const SpinnerLoader = () => {
  return (
    <div className="spinner-loader">
      <div className="spinner-circle"></div>
      <span className="spinner-text">Cargando...</span>
    </div>
  );
};
