import Image  from "next/image";
import user from "../../public/profile.png";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardDemo = () => {
  return (
    <Card className="group w-[400px] hover:[450px] hover:bg-blue-500 p-6 divide-x-2 flex  divide-slate-600 justify-start items-center">
      {/* <h1 className="w-full">Card Title</h1> */}
      <Image
        src={user}
        alt="user"
        width={70}
        height={70}
        className="w-[70px] h-[70px] rounded-full mr-3 p-2 group-hover:opacity-50"
      />
      <p className="pl-3 p-3 w-full">I am M Nouman Attique</p>
    </Card>
  );
};

export default CardDemo;
