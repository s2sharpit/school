import Image from "next/image";

export default function AboutSchool(props: any) {
    props = props.data;
    return (
        <div className="w-full mb-6">
            <h1 className="text-2xl font-semibold mb-1 text-blue-700">{props.title}</h1>
            <div className={`${props.img && "pb-8"} space items-center`}>
                {(props.img) && (
                <div className="w-fi float-left inline-block p-1 bg-white rounded-md drop-shadow-2xl mr-5">
                    <Image src={"/aboutSch/" + props.img} width={100} height={100} alt="" className="w-28" />
                </div>)}
                <p className="">
                    {(props.bold) && <b className="text-lg">{props.bold}</b>}
                    {props.content} <br /> {(props.c1) && props.c1}
                </p>
            </div>
        </div>
    )
}