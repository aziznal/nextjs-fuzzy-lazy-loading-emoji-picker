import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useId } from "react";

type TodoItemProps = {
  children: React.ReactNode;
  checked?: boolean;
};

export function TodoItem(props: TodoItemProps) {
  const id = useId();

  return (
    <div className="flex gap-2 items-center">
      <Checkbox id={id} checked={props.checked} />
      <Label htmlFor={id}>{props.children}</Label>
    </div>
  );
}
