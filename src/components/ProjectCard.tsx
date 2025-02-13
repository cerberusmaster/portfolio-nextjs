"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@/once-ui/components";
import { useState } from "react";

interface Image {
  src: string,
  desc: string
}

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: Image[];
  title?: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  const [activeIndex, setActive] = useState(0);
  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image) => ({
          src: image.src,
          alt: image.desc,
        }))}
        onNext={setActive}
      />
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        <Flex flex={12}>
          <Heading as="h2" wrap="balance" variant="heading-strong-xl">
            {images.at(activeIndex)?.desc}
          </Heading>
        </Flex>
      </Flex>
    </Column>
  );
};
