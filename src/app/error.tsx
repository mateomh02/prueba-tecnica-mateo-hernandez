// app/error.tsx
'use client'

export default function Error({
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h1>Algo salió mal!</h1>
      <button onClick={() => reset()}>Intentar de nuevo</button>
    </div>
  )
}   