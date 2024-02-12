import {Link} from 'react-router-dom';

function Card (props) {

	return(

		<div className="card">

			<img src={props.image} />
			<h3>{props.children}</h3>
			<Link to={`/product/details/${props.id}`}><p>{props.title}</p></Link>
			<p>{props.price}</p>
			<p>{props.category}</p>

		</div>

		)

}

export default Card;