import { useEffect, useState } from 'react'
const empty = { name: '', id: '', email: '', course: 'B.Tech CSE', semester: '5', gender: 'Female', attendance: '80' }
export default function StudentForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(empty)
  useEffect(() => { setForm(initial ? { ...initial, id: String(initial.id), semester: String(initial.semester), attendance: String(initial.attendance) } : empty) }, [initial])
  const change = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => { e.preventDefault(); onSave({ ...form, id: form.id.trim().toUpperCase(), semester: Number(form.semester), attendance: Number(form.attendance), subjects: initial?.subjects || { 'Design & Analysis of Algorithms': 80, SE: 80, AI: 80 } }) }
  return <form className="student-form" onSubmit={submit}>
    <div className="form-grid">
      <label>Student name<input name="name" value={form.name} onChange={change} placeholder="e.g. Riya Patel" required /></label>
      <label>Enrollment number<input name="id" type="text" value={form.id} onChange={change} placeholder="e.g. 24BT04001" required /></label>
      <label>Email address<input name="email" type="email" value={form.email} onChange={change} placeholder="student@example.com" required /></label>
      <label>Course<select name="course" value={form.course} onChange={change}><option>B.Tech CSE</option><option>B.Tech Chemical</option><option>BCA</option><option>MCA</option></select></label>
      <label>Semester<select name="semester" value={form.semester} onChange={change}>{[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n}>{n}</option>)}</select></label>
      <label>Gender<select name="gender" value={form.gender} onChange={change}><option>Female</option><option>Male</option><option>Prefer not to say</option></select></label>
      <label className="full-width">Attendance (%)<div className="range-row"><input name="attendance" type="range" min="0" max="100" value={form.attendance} onChange={change} /><strong>{form.attendance}%</strong></div></label>
    </div>
    <div className="form-actions"><button type="button" className="button secondary" onClick={onCancel}>Cancel</button><button className="button primary" type="submit">{initial ? 'Save changes' : 'Add student'}</button></div>
  </form>
}