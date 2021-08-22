import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
          alt="logo"
          width={200}
          style={{ marginBottom: 20 }}
        />
        <Circle color="black" size={60} />
      </div>
    </center>
  );
}

export default Loading;
