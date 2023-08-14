import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddVehicleForm() {
  const [text, setText] = useState({
    vehicle:'',
  });
  const [error, setError] = useState(null)
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()

    const vehicle = {text}

    const response = await fetch('/api/vehicles', {
      method: 'POST',
      body: JSON.stringify(vehicle),
      headers: {
        'Content-Type' : 'application/json'
      },
    });
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    } else {
      setText('')
      setError(null)
      console.log('new vehicle added', json)
      navigate('/allVehicles'); // Navigate to "/allVehicles" after successful form submission
    }
  }
    function handleChange(evt) {
    setText({
      ...text,
      [evt.target.name]:evt.target.value
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name='name' 
          value={text.name}
          placeholder='Name of Vehicle'
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="text"
          value={text.text}
          onChange={handleChange}
          placeholder='Add Description'
          required
        />
        <button type="submit">Add Vehicle</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}