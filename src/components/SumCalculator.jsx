import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { InputWithLabel } from '@/components/InputWithLabel.jsx';
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group.jsx';
import { RotateCcw } from 'lucide-react';
import { TooltipWrapper } from '@/components/ToolTipWrapper.jsx';
import { useCalculator } from '@/hooks/useCalculator.js';
import { ResultDialog } from '@/components/ResultDialog.jsx';
import { ThemeToggle } from '@/components/ThemeToggle.jsx';

export const SumCalculator = () => {
    const {
        firstNumber,
        handleFirstNumberChange,
        secondNumber,
        handleSecondNumberChange,
        result,
        calculateSum,
        isDialogOpen,
        setIsDialogOpen,
        resetCalculator,
        maxInputLength
    } = useCalculator();
    
    const inputs = [
        {
            id: "first-num",
            label: "First Number",
            onChange: handleFirstNumberChange,
            placeholder: "Input first number",
            value: firstNumber
        },
        {
            id: "second-num",
            label: "Second Number",
            onChange: handleSecondNumberChange,
            placeholder: "Input second number",
            value: secondNumber
        }
    ]

    return (
        <>
            <Card className="w-[80vw] md:w-[400px] mx-8 shadow-lg my-8 min-w-3xs">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">Sum Calculator</CardTitle>
                    <CardDescription className="text-center">Calculate the sum of two numbers</CardDescription>
                </CardHeader>
                <Separator />
                <CardContent>
                    <form id="sum-form" className="flex flex-col gap-4" onSubmit={calculateSum}>
                        {inputs.map((input) => (
                            <InputWithLabel
                                key={input.id}
                                id={input.id}
                                label={input.label}
                                value={input.value}
                                onChange={input.onChange}
                                placeholder={input.placeholder}
                                tooltipText={`Input a valid number (max ${maxInputLength} digits).\nDecimals and negative numbers are allowed.`}
                                tooltipPosition="bottom"
                            />
                        ))}
                    </form>
                </CardContent>
                <Separator />
                <CardFooter>
                    <ButtonGroup className="w-full flex">
                        <TooltipWrapper tooltipText="Calculate the sum of the two numbers">
                            <Button type="submit" form="sum-form" className="flex-1 active:scale-99 transition-transform duration-100">Calculate Sum</Button>
                        </TooltipWrapper>
                        <ButtonGroupSeparator />
                        <TooltipWrapper tooltipText="Reset the calculator">
                            <Button size="icon" className="active:scale-95 transition-transform duration-100" onClick={resetCalculator}><RotateCcw /></Button>
                        </TooltipWrapper>
                    </ButtonGroup>
                    
                </CardFooter>
            </Card>

            <ResultDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                firstNumber={firstNumber}
                secondNumber={secondNumber}
                result={result}
            />
        </>
    )
}