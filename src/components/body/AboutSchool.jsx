export default (props) => {
    props = props.data;
    return (
        <div className="w-full">
            <h1 className="text-2xl font-semibold mb-3 text-blue-700">{props.title}</h1>
            <div className="space items-center">
                {(props.img) && (
                <div className="w-fi float-left inline-block p-1 bg-white rounded-md drop-shadow-2xl mr-5">
                    <img src={props.img} alt="" className="w-28" />
                </div>)}
                <p className={(props.img) && ""}>
                    {(props.bold) && <b className="text-lg">{props.bold}</b>}
                    {props.content} <br /> {(props.c1) && props.c1}
                </p>
            </div>
        </div>
    )
}