import { AccordionDemo } from "@/components/accordian";
import { AlertDialogDemo } from "@/components/alert-dialogue";
import { CarouselDemo } from "@/components/caraosal";
import CardDemo from "@/components/card";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex  flex-col items-center justify-between p-8">
        <CarouselDemo />
        <div className="p-8">
          {" "}
          <AlertDialogDemo />
        </div>
      </main>
      <div className="p-8">
        {" "}
        <AccordionDemo />
      </div>
      <div className="w-screen h-screen flex justify-center item-center p-8">
        {" "}
        <CardDemo/>
      </div>
    </>
  );
}
