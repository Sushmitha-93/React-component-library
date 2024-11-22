import Alert from "./index";
import { FaHeart } from "react-icons/fa";

export default function AlertDemo() {
  return (
    <>
      <h2>Alert</h2>
      <h4>Basic Alerts</h4>
      <Alert severity="success" dismissible={true}>
        Success alert
      </Alert>
      <Alert severity="error" dismissible={true}>
        {" "}
        Error alert
      </Alert>
      <Alert severity="warning" dismissible={true}>
        Warning alert
      </Alert>
      <Alert severity="info" dismissible={true}>
        Info alert
      </Alert>
      <Alert severity="success" icon={false}>
        Success alert without icon
      </Alert>
      <Alert icon={<FaHeart />}>Alert with custom icon</Alert>
      <h4> Alert with title</h4>
      <Alert severity="success">
        <Alert.Title>Success alert Title</Alert.Title>
        <p>Congratulations! This is content of success alert message</p>
      </Alert>
      <Alert severity="error">
        <Alert.Title>Error alert Title</Alert.Title>
        <p>Oops! This is content of error alert message</p>
      </Alert>
      <Alert severity="warning">
        <Alert.Title>Warning alert Title</Alert.Title>
        <p>Warning: This is content of warning alert message</p>
      </Alert>
      <Alert severity="info">
        <Alert.Title>Info alert Title</Alert.Title>
        <p>Information: This is content of info alert message</p>
      </Alert>
    </>
  );
}
