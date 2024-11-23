import Button from "@mui/material/Button";
import useToast from "./useToast";

export default function ToastDemo() {
  const addToast = useToast();
  return (
    <>
      <h2>Toasts</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        <Button
          onClick={() => {
            addToast({
              message: "This is a simple toast",
              position: "bottom-left",
              icon: false,
              dismissible: false,
            });
          }}
        >
          Basic Toast
        </Button>
        <Button
          onClick={() => {
            addToast({
              message: "This is a toast message",
              title: "Title",
              position: "bottom-left",
            });
          }}
        >
          {" "}
          Custom Toast
        </Button>
      </div>

      <h3>Severity</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Button
          variant="contained"
          onClick={() =>
            addToast({
              message: "This is a success toast",
              severity: "success",
              position: "bottom-left",
            })
          }
        >
          Success
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            addToast({
              message: "This is an error toast",
              severity: "error",
              position: "bottom-left",
            })
          }
        >
          Error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            addToast({
              message: "This is a warning toast",
              severity: "warning",
              position: "bottom-left",
            })
          }
        >
          Warning
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            addToast({
              message: "This is an info toast",
              severity: "info",
              position: "bottom-left",
            })
          }
        >
          Info
        </Button>
      </div>

      <h3>Transitions</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Button
          variant="contained"
          onClick={() =>
            addToast({
              message: "This is a slide toast",
              position: "bottom-right",
              transition: "slide",
            })
          }
        >
          Slide
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            addToast({
              message: "This is a fade toast",
              position: "bottom-right",
              transition: "grow",
            })
          }
        >
          Grow
        </Button>
      </div>

      <h3>Positions</h3>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <Button
              onClick={() =>
                addToast({
                  message: "Top Center",
                  position: "top-center",
                  transition: "slide",
                })
              }
            >
              Top Center
            </Button>
          </div>

          <div
            style={{ display: "flex", justifyContent: "center", gap: "210px" }}
          >
            <Button
              onClick={() =>
                addToast({
                  message: "Top Left",
                  position: "top-left",
                  transition: "slide",
                })
              }
            >
              Top Left
            </Button>
            <Button
              onClick={() =>
                addToast({
                  message: "Top Right",
                  position: "top-right",
                  transition: "slide",
                })
              }
            >
              Top Right
            </Button>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "150px" }}
          >
            <Button
              onClick={() => {
                addToast({
                  message: "Bottom Left",
                  position: "bottom-left",
                  transition: "slide",
                });
              }}
            >
              Bottom Left
            </Button>
            <Button
              onClick={() => {
                addToast({
                  message: "Bottom Right",
                  position: "bottom-right",
                  transition: "slide",
                });
              }}
            >
              Bottom Right
            </Button>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <Button
              onClick={() => {
                addToast({
                  message: "Bottom Center",
                  position: "bottom-center",
                  transition: "slide",
                });
              }}
            >
              Bottom Center
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
