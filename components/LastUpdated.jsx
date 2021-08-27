import React from "react";
import ReactTimeAgo from "react-time-ago";

export default function LastUpdated({ date }) {
  return date ? (
    <em style={{ fontSize: "14px", marginLeft: "10px", color: "#919194" }}>
      <ReactTimeAgo date={date} locale="en-US" />
    </em>
  ) : null;
}
