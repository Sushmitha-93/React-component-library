import Button from "@mui/material/Button";
import useToast from "./useToast";

export default function ToastDemo() {
  const addToast = useToast();
  return (
    <>
      <h2>Toasts</h2>
      <Button
        variant="contained"
        onClick={() =>
          addToast({
            message: "This is toast",
            severity: "success",
            dismissible: true,
            style: { backgroundColor: "white", color: "black" },
          })
        }
      >
        Show Toast
      </Button>
      <Button
        variant="contained"
        onClick={() =>
          addToast({
            title: "Toast Title",
            message: "This is toast",
            severity: "success",
            dismissible: true,
            position: "top-left",
          })
        }
      >
        Show Toast
      </Button>
    </>
  );
}
