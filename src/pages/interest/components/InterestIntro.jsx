import SkipButton from "./SkipButton";
import InterestHeading from "./InterestHeading";

export default function InterestIntro({ onSkip }) {
  return (
    <section
      className="absolute left-0 top-0 w-[393px] h-[200px]"
      aria-label="관심 카테고리 인트로"
    >
      <SkipButton onClick={onSkip} />
      <InterestHeading />
    </section>
  );
}
