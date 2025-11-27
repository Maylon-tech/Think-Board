import { useState } from "react"
import { useNavigate } from "react-router"



const NoteDetailPage = () => {
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const navigate = useNavigate()

  return (
    <div>
      NoteDetailPage
    </div>
  )
}

export default NoteDetailPage
