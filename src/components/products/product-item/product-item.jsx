import { Link, useNavigate } from "react-router-dom";


function ProductItem({ id, title, image, category, price, description, isList, isDetail }) {

    const navigate = useNavigate();

    function goProductListPage() {
    navigate("/");
    }

    return(
        <>
            {isList && <Link 
                            to={`/product/details/${id}`} 
                            className="mt-5 container d-flex align-items-center shadow p-3 mb-5 bg-body-tertiary rounded"
                            style={{gap: '50px'}}
                            >
                        <img className={'border border-3 p-2'} src={image} alt={title} style={{height: '200px', width: '200px', objectFit: 'contain'}} />
                        <h1 className="fs-3" style={{width: '400px'}}>{title}</h1>
                        <p style={{width: '200px'}}>{category}</p>
                        <p>${price}</p>
                        <p className={'overflow-hidden'} style={{width: '200px', height: '50px'}}>{description}</p>
                    </Link>}
            {isDetail && <div className="mt-5 container d-flex flex-column shadow p-3 mb-5 bg-body-tertiary rounded gap-4">
                            <img className={'border border-3 p-2'} src={image} alt={title} style={{height: '400px', width: '400px', objectFit: 'contain'}}/>
                            <p 
                                className="fw-semibold rounded align-self-start" 
                                style={{backgroundColor: '#7c3aed', color: 'white', padding: '5px'}}
                            >men's clothing
                            </p>
                            <h1 className="align-self-start fs-3">{title}</h1>
                            <div className="d-flex gap-2 align-self-start">
                                <p className={'text-justify'} style={{width: '50%'}}>{description}</p>
                                <p style={{width: '50%', color: '#7c3aed', fontWeight: 'bold', fontSize: '25px'}}>${price}</p>
                            </div>
                            <div className="border-bottom"></div>
                            <button className="btn btn-success mx-auto" style={{width: '72px'}} onClick={() => goProductListPage()}>Back</button>
                        </div>}
        </>
    );
}

export default ProductItem;