import { useState } from 'react';

export default function AddVehicleForm() {
  const [text, setText] = useState('')
  const [error, setError] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault()

    const vehicle = {text}

    const response = await fetch('/api/vehicles', {
      method: 'POST',
      body: JSON.stringify(vehicle),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setText('')
      setError(null)
      console.log('new vehicle added', json)
    }
  }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Vehicles</label>
          <textarea 
            type="text" 
            name="vehicles" 
            value={text} onChange={(e) => setText(e.target.value)} required/>
          <button type="submit">Add Vehicle</button>
          {error && <div>{error}</div>}
        </form>
      </div>
  )
    }