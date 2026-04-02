import Image from "next/image";
import {
  mailerCardHeaderBlock,
  mailerCardPara,
  mailerKicker,
  mailerMessageTitle,
  mailerPhotoFrame,
  mailerPhotoFrameCutout,
  mailerPhotoRing,
  mailerPhotoSizes,
  mailerPortraitKickerSlot,
  mailerPortraitNameSlot,
  mailerQuoteBody,
  mailerQuoteBox,
} from "@/lib/mailer-layout";
import { SectionBox } from "./SectionBox";
import { PortraitMailerCard } from "./PortraitMailerCard";
import type { MessagePanelData } from "@/content/mailer";

export function MessagePanel({ data }: { data: MessagePanelData }) {
  const cropLeft = data.image.cropPortraitLeft === true;
  const cropZoom = data.image.cropZoom ?? 2;

  return (
    <SectionBox className="h-full min-h-0 flex flex-col">
      <PortraitMailerCard
        photo={
          <div
            className={cropLeft ? mailerPhotoFrameCutout : mailerPhotoFrame}
          >
            {cropLeft ? (
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="relative h-full w-full"
                  style={{
                    transform: `scale(${cropZoom})`,
                    transformOrigin: "left center",
                  }}
                >
                  <Image
                    src={data.image.src}
                    alt={data.image.alt}
                    fill
                    className="object-cover object-left-top"
                    sizes={mailerPhotoSizes}
                  />
                </div>
              </div>
            ) : (
              <>
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  className="object-cover object-top"
                  sizes={mailerPhotoSizes}
                />
                <div className={mailerPhotoRing} />
              </>
            )}
          </div>
        }
        head={
          <div className={mailerCardHeaderBlock}>
            <div className={mailerPortraitKickerSlot}>
              <div className={mailerKicker}>{data.kicker}</div>
            </div>
            <div className={mailerPortraitNameSlot}>
              <div className={mailerMessageTitle}>{data.title}</div>
            </div>
          </div>
        }
        body={
          <div className={mailerQuoteBox}>
            <div className={mailerQuoteBody}>
              <p className={mailerCardPara}>{data.quote}</p>
            </div>
          </div>
        }
      />
    </SectionBox>
  );
}
