import {
  EndorsementCardFooterBand,
  EndorsementCardHead,
  EndorsementCardPhoto,
  EndorsementCardQuote,
} from "./endorsement-card-shared";
import { PortraitMailerCard } from "./PortraitMailerCard";
import { SectionBox } from "./SectionBox";
import { cn } from "@/lib/cn";

export type EndorsementCardProps = {
  image: { src: string; alt: string };
  quote: string;
  byline?: string;
  titleKicker?: string;
  title?: string;
  urlText?: string;
  urlHref?: string;
  featured?: boolean;
  /** Photo left, copy column right (md+); stacks on small screens. */
  layout?: "portrait" | "split";
};

/** Single presentation layer for all endorsement data — stack + grid use the same pieces. */
export function EndorsementCardInner({
  image,
  quote,
  byline,
  titleKicker,
  title,
  urlText,
  urlHref,
  featured,
  layout = "portrait",
}: EndorsementCardProps) {
  const footer = urlText || byline;

  return (
    <PortraitMailerCard
      layout={layout}
      photo={
        <EndorsementCardPhoto
          image={image}
          priority={featured === true}
          splitFullHeight={layout === "split"}
        />
      }
      head={
        <EndorsementCardHead titleKicker={titleKicker} title={title} />
      }
      body={<EndorsementCardQuote quote={quote} />}
      footer={
        footer ? (
          <EndorsementCardFooterBand
            byline={byline}
            urlText={urlText}
            urlHref={urlHref}
          />
        ) : undefined
      }
    />
  );
}

export function EndorsementCard(props: EndorsementCardProps) {
  return (
    <SectionBox
      className={cn(
        "h-full min-h-0 flex flex-col",
        props.featured &&
          "ring-1 ring-[var(--primary)]/25 shadow-[var(--shadow-md)]",
      )}
    >
      <EndorsementCardInner {...props} />
    </SectionBox>
  );
}
