'use client';
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const About = () => {
    
    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                {/* text */}
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 
                text-center xl:text-left">
                    <div className='section-title' >Tim Kami </div>

                </div>
                {/* image */}
                <div className="hidden xl:flex relative">
                    <div className="">
                    </div>
                </div>
            </div>
            <div>

            </div>
            {/* icons */}
         
        </div>
    </section>
    );
};

export default About;