"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="pb-20 px-4 ">
        <div>
            <h1>
                Manage Your Finances <br/> with Intelligence 
            </h1>
            <p>
                An AI powered Financial management platform that helps you track, analyse, and optimize your spending with real time insights.

            </p>
            <div>
                <Link href="/dashboard">
                <Button size="lg" className="px-8">Get Started</Button>
                 </Link>
                 <Link href="/dashboard">
                <Button variant="outline" size="lg" className="px-8">Watch Demo</Button>
                 </Link>
            </div>
            <div>
                <div>
                    <Image src="/banner.jpeg" width={1280} height={720} />
                </div>
            </div>
        </div>
        </div>
  )
}

export default HeroSection