import './index.css'

export default function HashLink({ to, ...rest }) {
  return <a href={to} {...rest} className="hash-link"></a>
}
