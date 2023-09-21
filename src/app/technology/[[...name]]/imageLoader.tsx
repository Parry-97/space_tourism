"use client";
import { ImageLoaderProps } from "next/image";

export default function (p: ImageLoaderProps) {
  if (p.width > 1024) {
    return p.src.replace("landscape", "portrait");
  } else {
    return p.src;
  }
}
