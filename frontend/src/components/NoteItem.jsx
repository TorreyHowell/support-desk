import { useSelector } from 'react-redux'

function NoteItem({ note }) {
  const { user } = useSelector((state) => state.auth)

  console.log(note)

  return (
    <div
      className="note"
      style={{
        backgroundColor: !note.isStaff ? 'rgba(0,0,0,0.7)' : '#fff',
        color: !note.isStaff ? '#fff' : '#000',
      }}
    >
      <h4>
        Note from {note.isStaff ? <span>{user.name}</span> : <span>Staff</span>}
      </h4>
      <p>{note.text}</p>
      <div className="note-date">
        {new Date(note.createdAt).toLocaleDateString('en-US')}
      </div>
    </div>
  )
}

export default NoteItem