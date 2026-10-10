import { memo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { attendanceStatus } from '../data'
const StudentCard = memo(function StudentCard({ student, onDelete, onEdit }) {
  const status = attendanceStatus(Number(student.attendance))
  return <tr>
    <td><div className="student-cell"><span className="table-avatar">{student.name.split(' ').map(n => n[0]).slice(0, 2).join('')}</span><span><strong>{student.name}</strong><small>{student.email}</small></span></div></td>
    <td><span className="mono">{student.id}</span></td><td>{student.course}</td><td>Sem {student.semester}</td>
    <td><div className="attendance-cell"><div className="progress"><span style={{ width: `${student.attendance}%` }} /></div><span>{student.attendance}%</span></div></td>
    <td><span className={`status ${status.toLowerCase()}`}>{status}</span></td>
    <td><div className="table-actions"><Link className="icon-button" title="View details" to={`/students/${student.id}`}><ArrowUpRight size={16} /></Link><button className="text-button" onClick={() => onEdit(student)}>Edit</button><button className="text-button danger-text" onClick={() => onDelete(student.id)}>Delete</button></div></td>
  </tr>
})
export default StudentCard