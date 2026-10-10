export default function DashboardCard({ label, value, note, icon: Icon, tone = 'teal' }) {
  return <article className="stat-card"><div className={`stat-icon ${tone}`}><Icon size={21} /></div><p>{label}</p><div className="stat-value">{value}</div><span className="stat-note">{note}</span></article>
}