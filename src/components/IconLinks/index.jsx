import './index.css'

export default function IconLinks({ iconLinks }) {
  return (
    <ul className="icon-links">
      {iconLinks.map(item => (
        <li key={crypto.randomUUID()}>
          <a href={item.URL}>
            <img src={item.icon} alt="" />
          </a>
        </li>
      ))}
    </ul>
  )
}
