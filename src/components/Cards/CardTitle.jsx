export default function CardTitle({ children, ...rest }) {
  return (
    <>
      <div className="card-title" {...rest}>
        {children}
      </div>
    </>
  );
}
