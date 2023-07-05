import './index.css'

export default function Detail({ title, cover, children }) {
  return (
    <article id={title.toLowerCase()} className="detail">
      <h2>{title}</h2>

      <div className="content-wrapper">
        <section className="photo-wrapper">
          <a href="#123">
            <img src={cover} alt="" />
          </a>
        </section>

        <section className="paragraph-wrapper">
          <div dangerouslySetInnerHTML={{ __html: children }}></div>
          
          <div className="button-wrapper">
            <a href="#321">Learn more</a>
          </div>
        </section>
      </div>
    </article>
  )
}
