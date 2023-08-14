import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const CreateFinance = () => {
  return (
    <div className="flex justify-center flex-col align-middle w-1/3 mx-auto">
      {" "}
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Name</Label>
        <Input id="name" placeholder="Name" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Description</Label>
        <Textarea id="description" placeholder="Description" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Total Amount</Label>
        <Input type="number" id="total-amount" placeholder="Total Amount" />
      </div>
      <div
        className="mt-2
        mx-auto
      "
      >
        <Button variant="outline">Add Expense</Button>
      </div>
    </div>
  );
};
