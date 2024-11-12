import Card from "./index";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function CardDemo() {
  const cardContainerStyle = {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const cardStyle = {
    maxWidth: "300px",
    flex: "1 1 300px",
  };

  return (
    <>
      <h2>Cards</h2>
      <div style={cardContainerStyle}>
        <Card style={cardStyle}>
          <Card.BrandIcon>
            <IoCloudUploadOutline
              style={{ fontSize: "24px", color: "white" }}
            />
          </Card.BrandIcon>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
