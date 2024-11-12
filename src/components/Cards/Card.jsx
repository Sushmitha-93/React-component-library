import "./card.css";

export default function Card({ children, ...rest }) {
  return (
    <>
      <div className="card" {...rest}>
        {children}
      </div>
    </>
  );
}
