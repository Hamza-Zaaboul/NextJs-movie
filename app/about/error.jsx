"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      C'est pas bon : {error.message}
      <button onClick={() => reset()}>Reload</button>
    </div>
  );
}
