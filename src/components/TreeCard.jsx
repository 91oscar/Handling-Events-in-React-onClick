
export default function TreeCard({title, imgUrl, imgAlt, p}) {
    return (
        <div id="div__tree-card">
            <h2 className="title__tree-card">{title}</h2>
            <img className="img__tree-card" src={imgUrl} alt={imgAlt} />
            <p className="p__tree-card">{p}</p>  
        </div>
    )
}
