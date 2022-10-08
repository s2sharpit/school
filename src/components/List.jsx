import { useNavigate } from "react-router-dom"

export default (props) => {

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/" + `${props.data.li}`);
    }

    return (
        <li onClick={handleSearch} className="liLink w-fit mx-auto flex flex-col py-2 px-4 items-center cursor-pointer">
            {props.data.li}
            <span className="spLink h-0.5 w-0 transition-all duration-200 bg-white"></span>
        </li>
    )
}