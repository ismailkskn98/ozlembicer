import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";

export default function ModalVideo({ title, description, videoSrc }) {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer!">
        <div className="absolute inset-0 z-20 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100 ">
          <div className="bg-white/90 flex size-14 items-center justify-center rounded-full">
            <Play className="size-5 scale-100 text-logo-purple fill-logo-purple stroke-logo-purple transition-transform duration-200 ease-out group-hover:scale-105" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent
        className={
          "bg-transparent h-full max-h-[60vh] w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[50vw] overflow-hidden flex flex-col items-start gap-2 rounded-md border-none"
        }
      >
        <div className="relative overflow-hidden w-full h-full">
          <iframe src={videoSrc} className="size-full rounded-lg" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
