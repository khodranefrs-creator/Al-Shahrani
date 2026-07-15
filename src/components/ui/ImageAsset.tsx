"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageAssetProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  overlay?: "dark" | "gold" | "none";
  objectPosition?: string;
}

export function ImageAsset({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  overlay = "none",
  objectPosition = "center",
}: ImageAssetProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover transition-transform duration-700 ease-out",
          fill && "absolute inset-0 h-full w-full"
        )}
        style={{ objectPosition }}
      />
      {overlay === "dark" && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/30 to-transparent"
          aria-hidden="true"
        />
      )}
      {overlay === "gold" && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-gold-500/5"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
