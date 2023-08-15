import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export default function EditPage() {
    const {id} = useParams();
    const [vehicle, setVehicle] = useState(null);
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const fetchVehicles = async () => {
        const response = await fetch(`/api/vehicles/${id}`)
        const json = await response.json()

        if(response.ok) {
          console.log(json);
          setVehicle(json);
          setName(json.name);
          setText(json.text);
        }
    }
    useEffect(() => {
        fetchVehicles();
    }, [id]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    
    const handleDescriptionChange = (event) => {
        setText(event.target.value);
    };

    async function handleSaveChanges(event) {
      event.preventDefault()
        try {
            const response = await fetch(`/api/vehicles/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name:name, text:text }),
            });
      
            if (response.ok) {
              console.log('Vehicle updated successfully!');
            } else {
              console.error('Failed to update vehicle.');
            }
          } catch (error) {
            console.error('Error occurred while updating vehicle:', error);
          }
    }

    return(
        <>
            <h1>Edit Vehicle Page</h1>
            {vehicle ? (
                <form onSubmit={handleSaveChanges}>
                    <div>
                        <input type="text" value={name} onChange={handleNameChange} placeholder='Vehicle Name'/>
                        <br />
                        <input type="textarea" value={text} onChange={handleDescriptionChange} placeholder='Details'/>
                        <br />
                        <button type='submit'>Save Changes</button>
                    </div>
                </form>
            ) : (
                <p>No vehicle history available</p>
            )
            }
        </>
    )
}