import './index.css'

export default function Detail({ affiliation }) {
  console.log(affiliation)

  return (
    <article>
      <h1>Detail</h1>
      <p>affiliation: {affiliation}</p>
    </article>
  )
}
