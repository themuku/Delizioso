"use client";

export default function ErrorPage({ statusCode }: { statusCode: any }) {
  console.log(statusCode);
  return <div>Error</div>;
}
