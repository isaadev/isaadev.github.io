import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Assignments() {
    return (
        <>
            <div className="p-6">
                <div className="p-10">
                    <Card className="border-gray-700 bg-black p-4 ">
                        <CardHeader className="">
                            <CardTitle className="text-gray-300">Assignments</CardTitle>
                        </CardHeader>
                       
                        <div className="items-center mb-2">
                            <Card className="border-gray-700 bg-black my-4">
                                <CardHeader>
                                    <CardTitle className="text-gray-300">Assignment 1</CardTitle>
                                    <CardDescription>Description</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <a href="#" className="p-3 bg-gray-400 rounded-lg">Github Link</a>
                                </CardContent>
                                
                                </Card>

                                <Card className="border-gray-700 bg-black">
                                <CardHeader> 
                                    <CardTitle className="text-gray-300">Assignment 2</CardTitle>
                                    <CardDescription>Description</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <a href="Github Link" className="p-3 bg-gray-400 rounded-lg">Github Link</a>
                                </CardContent>
                                <CardFooter>
                                
                                </CardFooter>
                               
                            </Card>
                        </div>
                         <Link href="/" className="hover:underline hover:underline-offset-4 text-gray-400 ml-2 my-2">← Go Back</Link>
                    </Card>
                    
                </div>
            </div>
        </>

    );
}
