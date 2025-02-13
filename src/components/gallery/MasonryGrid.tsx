"use client";

import Masonry from "react-masonry-css";
import { Flex, IconButton, SmartImage, SmartLink } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { gallery } from "@/app/resources/content";
import DualPictureAccordion from "./DualPictureAccordion";
import EletricSpinner from "./EletricSpinner";

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 3,
    1440: 3,
    1024: 2,
    560: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {/* <DualPictureAccordion/> */}
      {/* <EletricSpinner /> */}
      {gallery.images.map((image, index) => {
        return <div className={styles.card}>
          <SmartImage
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
            key={index}
            radius="m"
            onClick={(e) => window.open(image.url, "_blank")}
            onMouseOver={(e) => {
              console.log(e.type)
            }}
            cursor="pointer"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "9 / 16"}
            src={image.src}
            alt={image.alt}
            className={styles.gridItem}
          />
          <div className={styles.bottom}>
            <div className={styles.desc} style={{
              flex: 9,
            }}>
              <a
                href={image.url}
                target="_blank"
              >
                {image.title}
              </a>
              <div className={styles.tags} style={{
                flexWrap: 'wrap',
              }}>
                {
                  image.stack?.map((s, i) => (<span key={i}>{s}</span>))
                }
              </div>
            </div>
            <Flex
              gap="24"
              flex={3}
              style={{
                justifyContent: 'end'
              }}
            >
              {image.git && <IconButton
                key={"name"}
                href={image.git}
                icon={"github"}
                tooltip={image.git}
                size="s"
                variant="ghost"
              />}
            </Flex>
          </div>
        </div>
      })}
    </Masonry>
  );
}
