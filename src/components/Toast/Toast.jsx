import Alert from "../Alert/index";

const Toast = ({ children, title, transitionClassName, ...props }) => {
  return (
    <div className={transitionClassName}>
      <Alert {...props}>
        {title && <Alert.Title>{title}</Alert.Title>}
        {children}
      </Alert>
    </div>
  );
};

export default Toast;
