import { useState } from 'react'

export default function App() {
  const [hasError, setHasError] = useState(false)

  return (
    <main>
      <button type="button" onClick={() => setHasError(true)}>
        Hiba megjelenítése
      </button>
      {hasError && <p role="alert">Error!</p>}
    </main>
  )
}
