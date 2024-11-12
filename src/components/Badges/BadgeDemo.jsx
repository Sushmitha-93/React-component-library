import Badge from "./Badge";

export default function BadgeDemo() {
  return (
    <>
      <h2>Badge Component</h2>
      <h3>Default Badge</h3>
      <h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <Badge>badge</Badge>
          <Badge color="red">badge</Badge>
          <Badge color="yellow">badge</Badge>
          <Badge color="green">badge</Badge>
          <Badge color="blue">badge</Badge>
          <Badge color="purple">badge</Badge>
          <Badge color="pink">badge</Badge>
        </div>
      </h1>
      <h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <Badge>badge</Badge>
          <Badge color="red">badge</Badge>
          <Badge color="yellow">badge</Badge>
          <Badge color="green">badge</Badge>
          <Badge color="blue">badge</Badge>
          <Badge color="purple">badge</Badge>
          <Badge color="pink">badge</Badge>
        </div>
      </h2>
      <h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <Badge>badge</Badge>
          <Badge color="red">badge</Badge>
          <Badge color="yellow">badge</Badge>
          <Badge color="green">badge</Badge>
          <Badge color="blue">badge</Badge>
          <Badge color="purple">badge</Badge>
          <Badge color="pink">badge</Badge>
        </div>
      </h3>

      <div style={{ display: "flex", gap: "10px" }}>
        <Badge>badge</Badge>
        <Badge color="red">badge</Badge>
        <Badge color="yellow">badge</Badge>
        <Badge color="green">badge</Badge>
        <Badge color="blue">badge</Badge>
        <Badge color="purple">badge</Badge>
        <Badge color="pink">badge</Badge>
      </div>
      <h3>Badge Pill</h3>
      <h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <Badge pill>badge</Badge>
          <Badge pill color="red">
            badge
          </Badge>
          <Badge pill color="yellow">
            badge
          </Badge>
          <Badge pill color="green">
            badge
          </Badge>
          <Badge pill color="blue">
            badge
          </Badge>
          <Badge pill color="purple">
            badge
          </Badge>
          <Badge pill color="pink">
            badge
          </Badge>
        </div>
      </h2>
    </>
  );
}
