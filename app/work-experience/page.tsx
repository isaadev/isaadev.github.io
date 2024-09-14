import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Experience() {
    return (
        <>
            <div className="p-6">
                <div className="p-10">
                    <Card className="border-gray-700 bg-black p-4 ">
                        <CardHeader className="">
                            <CardTitle className="text-gray-300">Work Experience</CardTitle>
                        </CardHeader>
                       
                        <div className="items-center mb-2">
                            <Card className="border-gray-700 bg-black my-4">
                                <CardHeader>
                                    <CardTitle className="text-gray-300">Research Developer Intern</CardTitle>
                                    <CardDescription>Boston, MA</CardDescription>
                                </CardHeader>
                                <CardContent>
                                   <p className="text-gray-300">Designed and developed a Human vs. Human marketplace on the Empirica platform, incorporating multi-user games to simulate warranted markets for producers and consumers.
                                   Utilized React and TailwindCSS to create a responsive and intuitive UI, translating Figma designs into a fully functional frontend </p>
                                </CardContent>
                                
                                </Card>
                              
                        </div>
                        <Link href="/" className="hover:underline hover:underline-offset-4 text-gray-400 ml-2"> ← Go Back</Link>
                    </Card>
                </div>
            </div>
        </>

    );
}
