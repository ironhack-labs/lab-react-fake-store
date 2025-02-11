import imgError from '../assets/HTML-404-Crying-Baby-Page.gif';

export default function ErrorPage() {
    return (
        <div>
            <img style={{ width: '100%' }} src={imgError} alt="Imagen de error 404" />
        </div>
    );
}