"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "white",
          alignItems: "center",
          border: "0.5px grey solid",
          borderRadius: "25px",
          // width: "max-content",
          padding: "50px 90px",
          boxShadow:
            "-8px 4px 30px grey, 8px -4px 30px grey, 8px 4px 30px grey, -8px -4px 30px grey",
        }}
      >
        <div>
          <h1 className="uppercase tracking-wide text-sm  font-semibold">
            Enter Your Name
          </h1>
        </div>
        <form onSubmit={handleSubmit}
        style={{display:"flex", flexDirection:"column"}}>
          <input
            style={{border:"1px black solid", borderRadius:"5px",padding:"5px", margin:"5px"}}
            type="text"
            placeholder="Type your name..."
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
          />
          <button 
          style={{border:"1px black solid", borderRadius:"25px",padding:"5px", margin:"5px",backgroundColor:"darkslateblue", color:"white"}}
          type="submit">Perdict Data</button>
        </form>
      </div>
    </div>
  );
}
