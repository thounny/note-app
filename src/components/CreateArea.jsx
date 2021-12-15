import React, {useState} from 'react';

function CreateArea() {

    const [note, setNote] = useState({
        title: "",
        content: ""
    }); 

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote, //spread all key value pairs and add to final object
                [name]: value
            };
        });
    }

    return (
        <div>
            <form>
                <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
                <textarea name="content" onChange={handleChange} value={note.content} placeholder="take a note..." rows="3" />
                <button>add</button>
            </form>
        </div>
    );
}

export default CreateArea;