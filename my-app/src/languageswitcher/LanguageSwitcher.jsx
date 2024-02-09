export default function LanguageSwitcher({onlanguagechange}){
    const handleLangueChange=(e)=>{
        e.preventDefault();
        console.log(e.currentTarget.dataset.lang)
        onlanguagechange('salam');

    }
    return <>
<ul className="nav justify-content-center">
    <li className="nav-item">
        <a className="nav-link active" data-lang='EN'  href="#" onClick={handleLangueChange}>Active Link</a>
        </li>
    <li className="nav-item">
        <a className="nav-link disabled"  data-lang='FR'  href="#"  onClick={handleLangueChange}>Fr</a>
        </li>
    <li className="nav-item">
        <a className="nav-link disabled " data-lang='AR'  href="#"  onClick={handleLangueChange}>Arabe Link</a>
        </li>
        </ul>  </>
}

//enenvoie les donner par une fonction callback de child vers le parent 
