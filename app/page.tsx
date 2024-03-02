"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const {push} = useRouter();

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`)
  }

  return (
    <div>
        <div>
            <h1>Enter your name</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type your name" onChange={(e) => setInputVal(e.target.value)} value={inputVal} />
            <button type="submit">Predict Data</button>
        </form>
    </div>
  );
}
