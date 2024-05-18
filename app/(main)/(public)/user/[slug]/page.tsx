import React from "react";

export default function User({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}
