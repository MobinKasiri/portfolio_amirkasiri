"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CircularLoading from "./CircularLoading";

const ImageWithLoader = (imgProps: React.ComponentProps<typeof Image>) => {
   const [isLoading, setIsLoading] = useState(true);
   const [hasError, setHasError] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      setHasError(false);
   }, [imgProps.src]);

   const handleImageLoad = () => {
      setIsLoading(false);
   };

   const handleImageError = () => {
      setIsLoading(false);
      setHasError(true);
   };

   return (
      <div
         style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
         }}
      >
         {/* Loading State */}
         {isLoading && (
            <div
               style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f3f4f6",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  minHeight: imgProps.style?.minHeight,
               }}
            >
               <CircularLoading size={24} />
            </div>
         )}

         {/* Error State */}
         {hasError && (
            <div
               style={{
                  width: "100%",
                  height: "100%",
                  minHeight: imgProps.style?.minHeight,
                  position: "relative",
               }}
               className="asdfasdfasdf"
            >
               <Image
                  style={{
                     width: "100%",
                     height: "100%",
                     objectFit: "cover",
                  }}
                  src="https://placehold.co/700x500.png"
                  alt={imgProps?.alt}
                  fill
               />
            </div>
         )}

         {/* Image */}
         {!hasError && (
            <Image
               {...imgProps}
               onLoad={handleImageLoad}
               onError={handleImageError}
               style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  ...imgProps.style,
               }}
               alt={imgProps?.alt}
            />
         )}
      </div>
   );
};

export default ImageWithLoader;
