import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

// A dialog component to display the result of the sum calculation
export function ResultDialog({ isOpen, onClose, firstNumber, secondNumber, result }) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader className="flex flex-col gap-4">
          <AlertDialogTitle className="text-2xl bold text-center">Calculation Result</AlertDialogTitle>
          <AlertDialogDescription>
                <p className="text-center text-lg">The sum of <span className="font-semibold">{firstNumber}</span> and <span className="font-semibold">{secondNumber}</span> is</p>
                <p className="my-6 text-4xl font-bold text-center text-red-600">{result}</p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
