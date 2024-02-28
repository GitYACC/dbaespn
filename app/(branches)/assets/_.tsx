export default function TwoWayScrollable() {
    return (
        <div className="overflow-scroll w-96 h-56 border rounded-lg no-scrollbar">
            <table className="w-full">
                <thead>
                        <th className="py-2 px-8 sticky left-0 top-0 bg-white z-10"></th>
                        <th className="py-2 px-8 sticky top-0 bg-white">Header 1</th>
                        <th className="py-2 px-8 sticky top-0 bg-white">Header 2</th>
                        <th className="py-2 px-8 sticky top-0 bg-white">Header 3</th>
                        <th className="py-2 px-8 sticky top-0 bg-white">Header 4</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 px-8 sticky left-0 bg-white">Samarth S.</td>
                        <td className="py-2 px-8">head1</td>
                        <td className="py-2 px-8">head2</td>
                        <td className="py-2 px-8">head3</td>
                        <td className="py-2 px-8">head4</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-8 sticky left-0 bg-white">Bhardwaj T.</td>
                        <td className="py-2 px-8">head1</td>
                        <td className="py-2 px-8">head2</td>
                        <td className="py-2 px-8">head3</td>
                        <td className="py-2 px-8">head4</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-8 sticky left-0 bg-white">Kaif J.</td>
                        <td className="py-2 px-8">head1</td>
                        <td className="py-2 px-8">head2</td>
                        <td className="py-2 px-8">head3</td>
                        <td className="py-2 px-8">head4</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-8 sticky left-0 bg-white">Jay J.</td>
                        <td className="py-2 px-8">head1</td>
                        <td className="py-2 px-8">head2</td>
                        <td className="py-2 px-8">head3</td>
                        <td className="py-2 px-8">head4</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
