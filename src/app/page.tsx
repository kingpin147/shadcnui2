import { AccordionDemo } from "@/components/accordian";
import { AlertDialogDemo } from "@/components/alert-dialogue";
import { CarouselDemo } from "@/components/caraosal";
import CardDemo from "@/components/card";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex  flex-col items-center justify-between p-8 bg-slate-500">
        <CarouselDemo />
        <div className="p-8 bg-slate-500">
          {" "}
          <AlertDialogDemo />
        </div>
      </main>
      <div className="p-8 bg-slate-500">
        {" "}
        <AccordionDemo  />
      </div>
      <div className=" flex justify-center item-center p-8 bg-slate-500">
        {" "}
        <CardDemo/>
      </div>
    </>
  );
}
