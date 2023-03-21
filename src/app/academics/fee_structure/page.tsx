import feeData from "../../../data/feeData"

export default function FeeStructure() {
    return (
        <section>
            <h3>Fee Structure</h3>
            <table className="border-2 rounded-3xl">
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Class</th>
                        <th>Fee(Rupees)</th>
                    </tr>
                </thead>
                <tbody>
                    {feeData.map((d, i) => 
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{d.class}</td>
                        <td>{d.fee}</td>
                    </tr>
                        )}
                </tbody>
            </table>
        </section>
    )
}