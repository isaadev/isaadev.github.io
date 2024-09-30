import Link from 'next/link';

export default function Assignments() {
    return (
        <>
            <div className="p-6">
                <div className="p-10">
                    <div className="border-gray-700 bg-black p-4">
                        <h2 className="text-gray-300 text-lg mb-4">Assignments</h2>

                        <ul className="list-disc pl-6 text-gray-300 space-y-4 mb-6">
                            <li>
                                <strong>Assignment 0:</strong> Dummy assignment for testing site, a simple summation script.
                                <div>
                                    <a href="https://github.com/isaadev/isaa-assignment-0" className="block text-sm bg-gray-400 rounded-lg p-2 mt-2 w-fit">Github Link</a>
                                </div>
                            </li>
                            <li>
                                <strong>Assignment 1:</strong> Collecting and analyzing data on elevator arrival times at the ground floor of CDS to determine the best location to wait in order to minimize the expected walking distance to the next arriving elevator.
                                <div>
                                    <a href="https://github.com/isaadev/isaa-assignment-1" className="block text-sm bg-gray-400 rounded-lg p-2 mt-2 w-fit">Github Link</a>
                                </div>
                            </li>
                            <li>
                                <strong>Assignment 2:</strong> Visualization of KMeans algorithm.
                                <div>
                                    <a href="https://github.com/isaadev/isaa-assignment-2" className="block text-sm bg-gray-400 rounded-lg p-2 mt-2 w-fit">Github Link</a>
                                </div>
                            </li>
                        </ul>

                        <Link href="/" className="hover:underline hover:underline-offset-4 text-gray-400 ml-2 my-8">← Go Back</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
