"use client";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";

import { useEffect } from "react";
import JustifiedGallery from "@s2ui/justified-gallery";


export default function ImgGallery() {
  useEffect(() => {
    JustifiedGallery({
      container: document.querySelector(".gallery") as HTMLElement,
      rowHeight: 260,
      gap: 6,
    });
  }, []);

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="App py-6">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        mode="lg-fade"
        pager={false}
        thumbnail={true}
        galleryId={"nature"}
        autoplayFirstVideo={false}
        elementClassNames={"gallery"}
        mobileSettings={{
          controls: false,
          showCloseIcon: false,
          download: false,
          rotate: false,
        }}
      >
        {Array.from({ length: 50 }, (_, i) => i + 1).map((image) => {
          return (
            <a href={`/gallery/${image}.jpg`} key={image}>
              <Image
                className="hover:opacity-90 hover transition w-full h-full"
                alt={`img${image}`}
                src={`/gallery/${image}.jpg`}
                width={3000}
                height={2000}
              />
            </a>
          );
        })}
      </LightGallery>
    </div>
  );
}
