import { useCallback, useState } from "react";
import { toast } from "sonner"
import Decimal from "decimal.js";


export const useCalculator = () => {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [result, setResult] = useState(0.0);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const MAX_INPUT_LENGTH = 15;

    // Calculate the sum of the two numbers
    const calculateSum = (e) => {
        e?.preventDefault(); // Prevent refresh on form submit

        const isFirstNumberValid = !isNaN(parseFloat(firstNumber));
        const isSecondNumberValid = !isNaN(parseFloat(secondNumber));

        if (!isFirstNumberValid && !isSecondNumberValid) {
            toast.error("Please enter valid numbers for both inputs.");
            return;
        }
        else if (!isFirstNumberValid) {
            toast.error("Please enter a valid number for the first input.");
            return;
        }
        else if (!isSecondNumberValid) {
            toast.error("Please enter a valid number for the second input.");
            return;
        }

        // Use Decimal.js for precise addition
        const sum = new Decimal(firstNumber).plus(new Decimal(secondNumber)).toNumber();
        
        setResult(sum);
        setIsDialogOpen(true); // Open the result dialog
    }

    // Reset the calculator state
    const resetCalculator = () => {
        setFirstNumber("");
        setSecondNumber("");
        setResult(0.0);
        setIsDialogOpen(false);
        toast.success("Calculator reset successfully!");
    }

    // Handle input changes with validation
    const handleInput = useCallback((setter) => (e) => {
        let value = e.target.value;

        // Allow only numbers, decimal points, empty string, or a single minus sign
        if ((/^-?\d+\.?\d*$/.test(value) || value === "" || value === "-") && value.replace(".", "").length <= MAX_INPUT_LENGTH) {
            setter(value);
        }
    }, []);

    return {
        firstNumber,
        secondNumber,
        handleFirstNumberChange: handleInput(setFirstNumber),
        handleSecondNumberChange: handleInput(setSecondNumber),
        result,
        isDialogOpen,
        setIsDialogOpen,
        calculateSum,
        resetCalculator,
        maxInputLength: MAX_INPUT_LENGTH
    };
}