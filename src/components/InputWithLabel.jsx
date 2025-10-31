import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { TooltipWrapper } from "./TooltipWrapper"

export const InputWithLabel = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  tooltipText = "",
  tooltipPosition = "right"
}) => {
  const content = (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className="w-full"
        value={value}
      />
    </div>
  );

    return tooltipText !== ""
        ? (<TooltipWrapper tooltipText={tooltipText} position={tooltipPosition}>{content}</TooltipWrapper>)
        : (content);
};
