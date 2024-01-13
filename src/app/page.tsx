import { AccordionDemo } from "@/components/accordian";
import { AlertDialogDemo } from "@/components/alert-dialogue";
import { CarouselDemo } from "@/components/caraosal";
import CardDemo from "@/components/card";
import { TypographyH1 } from "@/components/heading";

import { Calendar } from "@/components/ui/calendar";


import Image from "next/image";
import { ButtonSecondary } from './../components/button';
import { ComboboxDemo } from "@/components/comboBox";
import { SheetDemo } from "@/components/sheet";
import { CommandDemo } from "@/components/customSearch";

export default function Home() {
  return (
    <>
      <main className="flex  flex-col items-center justify-between p-8 bg-slate-200">
        {/* caraousel */}
        <CarouselDemo />
        <div className="p-8 bg-slate-300">
          {" "}
          {/* alert dialog */}
          <AlertDialogDemo />
        </div>
      </main>
      <div className="p-8 bg-slate-300">
        {" "}
        {/* accordion */}
        <AccordionDemo  />
      </div>
      <div className=" flex justify-center item-center p-8 bg-slate-300">
        {" "}
        {/* profile Card */}
        <CardDemo/>
      </div>
      {/* calerdar ui */}
      {/* main div */}
      <div className="grid  grid-cols-2 gap-4 p-5  m-7">
        {/* heading div */}
        <div className=" flex flex-col gap-8 justify-center items-center p-5">
          <TypographyH1/>
          <div className="flex justify-center items-center gap-8">
            <ButtonSecondary text={"Search"} />
            <ButtonSecondary text={"Profile"} />
          </div>
        </div>
        {/* calender div */}
        <div className="flex justify-center items-center p-5 ">
          <Calendar/>
         
          </div></div>
             {/* Combo div */}
          <div className="flex justify-center items-center p-9 ">
          <ComboboxDemo/>
         
          </div>
             {/* Sheet div */}
             <div className="flex justify-center items-center p-9 ">
          <SheetDemo/>
         
          </div>
        

         {/* Global Search div */}
         <div className="flex justify-center items-center p-9 ">
          <CommandDemo/>
         
          </div>
    </>
  );
}
