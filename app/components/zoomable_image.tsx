"use client";
import * as React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

function clsx(...args: any) {
	return args.filter(Boolean).join(" ");
}

export default function ZoomableImage({ className, alt, ...props }: Props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
      <img
        {...props}
        alt={alt}
        className={clsx(
          "cursor-zoom-in rounded-md border border-zinc-200 transition",
          className
        )}
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          role="dialog"
          aria-modal
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <TransformWrapper
              doubleClick={{ disabled: true }}
              wheel={{ step: 50 }}
              pinch={{ step: 5 }}
            >
              <TransformComponent wrapperClass="max-h-[90vh] max-w-[90vw]">
                <img
                  src={props.src?.toString()}
                  alt={alt}
                  className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
                />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
      )}
    </>
  );
}
