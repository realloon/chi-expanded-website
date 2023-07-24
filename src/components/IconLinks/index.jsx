import './index.css'

export default function IconLinks({ iconLinks }) {
  return (
    <ul className="icon-links">
      {iconLinks.map(item => (
        <li key={crypto.randomUUID()}>
          <a href={item.URL} target='_block' title={`前往页面查看`}>
            <img src={item.icon} alt="" />
          </a>
        </li>
      ))}
    </ul>
  )
}
