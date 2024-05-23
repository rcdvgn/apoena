import React from "react";

export function Switch({
  value,
  setValue,
  onColor,
  offColor,
}: {
  value: any;
  setValue: any;
  onColor: string;
  offColor: string;
}) {
  return (
    <div
      onClick={() => setValue(!value)}
      className={`flex cursor-pointer p-[1px] rounded-full w-8 ${
        value ? `bg-${onColor}` : `bg-${offColor}`
      }`}
    >
      <div
        className={`${
          value ? "ml-auto" : ""
        } h-[18px] aspect-square rounded-full bg-foreground`}
      ></div>
    </div>
  );
}
