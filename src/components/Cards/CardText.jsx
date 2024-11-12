export default function CardText({ children, ...rest }) {
  return (
    <>
      <div className="card-text" {...rest}>
        {children}
      </div>
    </>
  );
}
