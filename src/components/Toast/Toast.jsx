import Alert from "../Alert/index";

export default function Toast({ children, title, ...props }) {
  if (title) {
    return (
      <Alert {...props}>
        <Alert.Title>{title}</Alert.Title>
        {children}
      </Alert>
    );
  }
  return (
    <>
      <Alert {...props}> {children}</Alert>
    </>
  );
}
