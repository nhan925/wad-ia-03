import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip.jsx';

export const TooltipWrapper = ({ tooltipText, children, position = "bottom" }) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent side={position}>
                <p className="whitespace-pre-line">{tooltipText}</p>
            </TooltipContent>
        </Tooltip>
    )
}