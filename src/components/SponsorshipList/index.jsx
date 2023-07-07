import './index.css'

const sort = array =>
  array.sort((a, b) => b.amount - a.amount || a.name.localeCompare(b.name))

export default function SponsorshipList({ list }) {
  return (
    <div className="sponsorship-list">
      {sort(list).map(item => (
        <span
          key={Math.random()}
          title={`${item.name} donated ${item.amount} yuan.`}
        >
          {item.name}
        </span>
      ))}
    </div>
  )
}
