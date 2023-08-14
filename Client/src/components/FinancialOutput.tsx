import { Button } from "@/components/ui/button";

export const FinancialOutput = () => {
  return (
    <div className="space-y-8 h-24">
      <div className="group h-full relative flex py-4 border-white border-2 rounded-lg items-center mt-4 hover:bg-gray-600 transition duration-300">
        <div className="ml-4 space-y-1">
          <p className="text-sm text-white font-medium leading-none">
            Olivia Martin
          </p>
          <p className="text-sm text-white text-muted-foreground">
            Description
          </p>
        </div>
        <div className="ml-auto text-white font-medium mr-4">+$1,999.00</div>

        <Button
          height="20px"
          className="absolute h-8 w-16 right-1/2 bottom-2 py-2 px-4  text-white opacity-0 group-hover:opacity-100 transition duration-300"
        >
          Edit
        </Button>
        <Button
          variant="destructive"
          className="absolute h-8 w-16 right-1/2 top-2 py-2 px-4 bg-red-500 text-white opacity-0 group-hover:opacity-100 transition duration-300"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
