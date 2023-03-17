import { useNavigate } from "react-router-dom"

export default (props) => {

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/" + props.data.li);  
        // {console.log(toString().toLowerCase(props.data.li));}
    }

    const handleSearchLi = (i) => {
        navigate("/" + (props.data.nested[i]));
    }

    return (
        <li onClick={!props.data.nested ? handleSearch : null} className="liLink z-10 w-fit mx-auto flex flex-col p-4 items-center cursor-pointer">
            {props.data.li}
            <span className="spLink h-0.5 w-0 transition-all duration-200 bg-white"></span>
            {props.data.nested && 
            <ul className="ulLink scale-0 md:hidden md:absolute text-left bg-blue-900 md:mt-10 w-40 rounded-md transition-all duration-700">
                <li onClick={() => handleSearchLi(0)} className="navLi">{props.data.nested[0]}</li>
                <li onClick={() => handleSearchLi(1)} className="navLi">{props.data.nested[1]}</li>
            </ul>}
        </li>
    )
}