import { useState } from "react";
import { useLocation } from "react-router-dom";

const NewEntryForm = ({ submitForm }) => {

  const location = useLocation();
  const oneEntry = location.state;
  console.log(oneEntry);
  
    const [newEntry, setNewEntry] = useState(
        {
            content: "",
            weekDay: "",
            moodRating: "",
        }
    );

  const weekdays = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  const weekdayOptions = weekdays.map((weekday) => {
    return <option value={weekday}>{weekday}</option>
  })

  const moods = ['REALLYBAD', 'NEGATIVE', 'INDIFFERENT', 'POSITIVE', 'REALLYGOOD'];
  const moodOptions = moods.map((mood) => {
    return <option value={mood}>{mood}</option>
  })

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (newEntry.content === "" || newEntry.moodRating=== "" || newEntry.weekDay === ""){
          return alert("Incomplete form")
        } else {
          submitForm(newEntry, 2); // remove dis line in d future
          setNewEntry(
              {
                  content: "",
                  weekDay: "",
                  moodRating: "",
              }
          );
          console.log("Journal entry posted successfully!");
        }
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewEntry((prevEntry) => ({
          ...prevEntry,
          [name]: name === "moodRating" ? value.toUpperCase() : value,
        }));
      };

    return (
        <form id="new-journal-entry" onSubmit={handleFormSubmit}>
          <label>Content:</label>
            <textarea
              name="content"
              value={newEntry.content}
              onChange={handleInputChange}
            />
          <label>Mood</label>
          <select 
              name="moodRating"
              defaultValue="select-mood"
              onChange={handleInputChange}
              >
              <option disabled value="select-mood">Mood</option>
              {moodOptions}    
          </select>
          <label>Weekday</label>
              <select 
                  name="weekDay"
                  defaultValue="select-weekday"
                  onChange={handleInputChange}
                  >
                  <option disabled value="select-weekday">Weekday</option>
                  {weekdayOptions}
              </select>
          <button type="submit">Submit</button>
        </form>
    );
}

export default NewEntryForm;