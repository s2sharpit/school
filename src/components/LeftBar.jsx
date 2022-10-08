export default (props) => {
    props = props.data;
    return (
        <div className="border-solid w-[calc(100% - 80px)] lg:w-80 bg-blue-100 border-black rounded-lg border-[1px] space-y-2 pb-7">
            <h1 className="rounded-t-lg p-2 text-blue-800 text-2xl text-center bg-blue-300 font-bold">{props.title}</h1>
            <p className="px-7 text-justify">{props.content}</p>
        </div>
    )
}