export default (props) => {
    return (
        <li className="liLink w-fit mx-auto">
            <a href="#" className="flex flex-col py-2 px-4 items-center">{props.data.li}
                <span className="spLink h-0.5 w-0 transition-all duration-200 bg-white"></span>
            </a>
        </li>
    )
}