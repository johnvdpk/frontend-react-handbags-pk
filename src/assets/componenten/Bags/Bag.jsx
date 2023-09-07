

// eslint-disable-next-line react/prop-types
function Bag({title, image, name, price}) {
    return (
        <article>
            <span>{title}</span>
            <img src={image}  />
            <p>{name}</p>
            <h4>€{price},-</h4>

        </article>


    )
}

export default Bag;