import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="" >
        <Image
          className=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }} // optional
          src="/images/hero-image.jpg"
          alt="Hero image" />
      </section>
      <section className="p-6 flex items-center justify-center container mx-auto px-4 my-16">
        <div className="flex justify-between">
          <div className="w-[50%] pt-8 pl-6">
            <div className="py-4">
              <p>Supporting All Languages and Subjects with Automated Quiz</p>
            </div>
            <div>
              <h1 className="text-[54px] text-slate-950 leading-[3.5rem] font-bold">
                Effortless Creation of Engaging Online Assessments
              </h1>
              <p className="text-[20px] text-gray-500 max-w-[80%] pt-4">
                Empowering Educators and Businesses with Automated Quiz
                Generation
              </p>
            </div>
            <div className="mt-8">
              <Button variant='default' >
                <Link href={"/sign-up"}>
                  Sign Up Free
                </Link>
              </Button>
              <Button className="mx-3" variant='default' >
                <Link href={"/create"}>
                  Create Quiz
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/images/hero-image.jpg"
              width={570}
              height={570}
              alt="Hero Image"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
