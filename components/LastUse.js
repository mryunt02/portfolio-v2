import Image from "next/image";
import React from "react";
import vector from "/images/vector-intelligent-object-2.svg";
import search from "/images/search-search-6.svg";
import label from "/images/label-52.svg";
import select from "/images/select-items.svg";

function LastUse() {
  return (
    <>
      <div style={{ alignSelf: "center" }}>
        <Image
          src={vector}
          alt="vector"
          width={20}
          height={20}
          style={{
            transform: "rotate(180deg)",
            filter: "invert(0.5)",
            alignSelf: "center",
            marginLeft: "20px",
            marginRight: "30px",
          }}
        />
        <Image
          src={vector}
          alt="vector"
          width={20}
          height={20}
          style={{ alignSelf: "center", filter: "contrast(0.8)" }}
        />
      </div>
      <p style={{ alignSelf: "center", marginLeft: "-400px" }}>Developer</p>
      <div style={{ display: "flex", gap: "10px", marginRight: "20px" }}>
        <Image
          src={select}
          alt="select"
          width={25}
          height={25}
          style={{ alignSelf: "center", filter: "invert(0.5)" }}
        />
        <Image
          src={label}
          alt="label"
          width={25}
          height={25}
          style={{ alignSelf: "center", filter: "invert(0.5)" }}
        />
        <Image
          src={search}
          alt="search"
          width={25}
          height={25}
          style={{ alignSelf: "center", filter: "invert(0.5)" }}
        />
      </div>
    </>
  );
}

export default LastUse;
