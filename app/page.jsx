import HeroSection from "@/components/hero";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />
      <section className="py-20 bg-blue-50 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData,index) => (
              <div key={index} className="text-center ">
                <h2 className="text-4xl font-bold text-blue-600 mb-2 ">{statsData.value}</h2>
                <p className="text-gray-600">{statsData.label}</p>
              </div>  
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 ">Everything you need to manage your finances</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuresData.map((feature,index)=>(
                  <Card key={index} className="p-6">
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
               
              </Card>

                ))}
            </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 ">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {howItWorksData.map((step,index)=>(
                <div> 
                  <div>{step.icon}</div>
                  <div><h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                  </div>
               ))}

                
            </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 ">What our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonialsData.map((testimonial,index)=>(
                  <Card key={index} className="p-6">
                <CardContent className=" pt-4">
                  <div className="flex items-center mb-4">
                      <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                      />
                      <div className="ml-4">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600 ">{testimonial.position}</div>
                      </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
               
              </Card>

                ))}
            </div>
        </div>
      </section>

       <section className="py-20 bg-blue-600 ">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl text-blue-50 font-bold text-center mb-4 ">
              Ready to take control of your finances?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto ">
              Join thousands of users who are already managing their finances with smarter with Welth
            </p>
            <Link href="/dashboard">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
               Start Your Free Trial
              </button>
            </Link>
           
        </div>
      </section>
    </div>
  );
}
