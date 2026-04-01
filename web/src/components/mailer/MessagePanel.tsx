import Image from "next/image";
import {
  mailerKicker,
  mailerMessageTitle,
  mailerPhotoFrame,
  mailerPhotoFrameCutout,
  mailerPhotoRing,
  mailerPhotoSizes,
  mailerPortraitKickerSlot,
  mailerPortraitNameSlot,
  mailerPortraitRow,
  mailerQuoteBox,
} from "@/lib/mailer-layout";
import { SectionBox } from "./SectionBox";
import type { MessagePanelData } from "@/content/mailer";

export function MessagePanel({ data }: { data: MessagePanelData }) {
  const cropLeft = data.image.cropPortraitLeft === true;
  const cropZoom = data.image.cropZoom ?? 2;

  return (
    <SectionBox className="h-full overflow-hidden">
      <div className={mailerPortraitRow}>
        <div className={cropLeft ? mailerPhotoFrameCutout : mailerPhotoFrame}>
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
                  className="object-cover object-left object-top"
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

        <div className="flex min-h-0 min-w-0 flex-1 flex-col items-center gap-3 text-center">
          <div className="flex flex-col gap-1">
            <div className={mailerPortraitKickerSlot}>
              <div className={mailerKicker}>{data.kicker}</div>
            </div>
            <div className={mailerPortraitNameSlot}>
              <div className={mailerMessageTitle}>{data.title}</div>
            </div>
          </div>
          <div className={`mt-auto ${mailerQuoteBox}`}>{data.quote}</div>
        </div>
      </div>
    </SectionBox>
  );
}

