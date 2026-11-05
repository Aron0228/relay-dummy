import { useState } from 'react'

export default function App() {
  const [hasSuccess, setHasSuccess] = useState(false)

  return (
    <main>
      <button type="button" onClick={() => setHasSuccess(true)}>
        Sikeres üzenet megjelenítése
      </button>
      {hasSuccess && <p role="status">Success!</p>}
    </main>
  )
}
