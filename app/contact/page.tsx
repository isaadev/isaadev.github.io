import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Projects() {
    return (
        <>
            return (
    <div className="p-6">
      <div className="p-10">
        <Card className="border-gray-700 bg-black p-4">
          <CardHeader>
            <CardTitle className="text-gray-300">Contact</CardTitle>
          </CardHeader>
          <div className="self-center ml-8 mb-4">
            <a href="https://www.linkedin.com/in/isaals" className="hover:underline hover:underline-offset-4 flex items-center text-gray-300 mb-2">
              <FaLinkedin className="mr-2" /> Linkedin
            </a>
            <a href="https://www.github.com/isaadev" className="hover:underline hover:underline-offset-4 flex items-center text-gray-300">
              <FaGithub className="mr-2" /> Github
            </a>
          </div>
          <Link href="/" className="hover:underline hover:underline-offset-4 text-gray-400 my-4"> 
            ← Go Back
          </Link>
        </Card>
      </div>
    </div>
    </>
  );
};

