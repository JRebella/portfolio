import Image from "next/image";
import { ComponentProps, FunctionComponent } from "react";

const AboutSection: FunctionComponent<ComponentProps<"section">> = ({
  className,
  ...props
}) => {
  return (
    <section>
      <h2>About me</h2>
    </section>
  );
};

export default AboutSection;
