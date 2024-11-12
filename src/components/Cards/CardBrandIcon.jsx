export default function CardBrandIcon({ children, ...rest }) {
  return (
    <>
      <div className="card-brand-icon" {...rest}>
        {children}
      </div>
      <div style={{ paddingBottom: "10px" }}></div>
    </>
  );
}
