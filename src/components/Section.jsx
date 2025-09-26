import SectionSvg from "../assets/svg/SectionSvg";
import GlassWindow from "./ui/GlassWindow";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-12`
      } 
      ${className || ""}`}
    >
      <GlassWindow>
        {children}
      </GlassWindow>

    </div>
  );
};

export default Section;
