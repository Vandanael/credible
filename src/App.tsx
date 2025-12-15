import { useState } from "react"
import quotes from "@/data/quotes.json"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function App() {
  const [index, setIndex] = useState(0)
  const [choice, setChoice] = useState<"credible" | "fake" | null>(null)

  const quote = quotes[index]

  const isCorrect =
    choice === null ? null : (choice === "credible") === quote.isReal

  const next = () => {
    setIndex((prev) => (prev + 1) % quotes.length)
    setChoice(null)
  }

  return (
    <div className="p-6 max-w-xl space-y-4">
      <Card>
        <CardContent className="pt-6">
          <p className="text-lg italic">“{quote.text}”</p>
          <p className="mt-4 text-sm text-muted-foreground">— {quote.author}</p>
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Button disabled={choice !== null} onClick={() => setChoice("credible")}>
          Credible
        </Button>
        <Button
          variant="outline"
          disabled={choice !== null}
          onClick={() => setChoice("fake")}
        >
          Fake
        </Button>
      </div>

      {choice && <p className="text-sm">Your choice: {choice}</p>}

      {isCorrect !== null && (
        <p className="text-sm font-medium">{isCorrect ? "Correct" : "Incorrect"}</p>
      )}

      <div>
        <Button disabled={choice === null} onClick={next}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default App
