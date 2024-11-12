export default function CardBody({ children, ...rest }) {
  return (
    <>
      <div className="card-body" {...rest}>
        {children}
      </div>
    </>
  );
}
