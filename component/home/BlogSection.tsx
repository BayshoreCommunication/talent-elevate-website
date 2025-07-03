import Image from "next/image";

const BlogSection = () => {
  return (
    <section className="bg-[#ffffff] py-10 md:py-20 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-col sm:flex-row gap-14">
          <div className="flex-1">
            <Image
              width={1000}
              height={500}
              src="/assets/home/Frame 1000006041.png"
              alt="Remote team collaboration"
              className="w-[900px] h-auto mx-auto"
              priority
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-primary-foreground ">
              How does our Project Organizer work?
            </h2>
            <p className="text-base  md:text-lg  text-primary-foreground mt-4 sm:mt-5">
              Create as many projects as needed, each displayed in a dedicated
              column for quick navigation. Rearrange projects, sort them into
              folders, and customize your workspace to fit your workflow.
              Rearrange projects, sort them into folders, and customize your
              workspace to fit your workflow. Straightforward and
              cost-effective, promoting inclusive project collaboration. Inside
              each project, detailed task management and event planning
              capabilities allow for comprehensive project oversight and
              execution. Inside each project, detailed task management and event
              planning capabilities allow for comprehensive project oversight
              and execution.
            </p>
            <p className="text-base  md:text-lg  text-primary-foreground mt-4 sm:mt-5">
              Inviting collaborators, including external guests like freelancers
              and clients, is straightforward and cost-effective, promoting
              inclusive project collaboration. Inside each project, detailed
              task management and event planning capabilities allow for
              comprehensive project oversight and execution. Inside each
              project, detailed task management and event planning capabilities
              allow for comprehensive project oversight and execution.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col sm:flex-row gap-14 mt-14 ">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-primary-foreground ">
              How does our Project Organizer work?
            </h2>
            <p className="text-base  md:text-lg  text-primary-foreground mt-4 sm:mt-5">
              Create as many projects as needed, each displayed in a dedicated
              column for quick navigation. Rearrange projects, sort them into
              folders, and customize your workspace to fit your workflow.
              Rearrange projects, sort them into folders, and customize your
              workspace to fit your workflow. Straightforward and
              cost-effective, promoting inclusive project collaboration. Inside
              each project, detailed task management and event planning
              capabilities allow for comprehensive project oversight and
              execution. Inside each project, detailed task management and event
              planning capabilities allow for comprehensive project oversight
              and execution.
            </p>
            <p className="text-base  md:text-lg  text-primary-foreground mt-4 sm:mt-5">
              Inviting collaborators, including external guests like freelancers
              and clients, is straightforward and cost-effective, promoting
              inclusive project collaboration. Inside each project, detailed
              task management and event planning capabilities allow for
              comprehensive project oversight and execution. Inside each
              project, detailed task management and event planning capabilities
              allow for comprehensive project oversight and execution.
            </p>
          </div>
          <div className="flex-1">
            <Image
              width={1000}
              height={500}
              src="/assets/home/Frame 1000006042 (2).png"
              alt="Remote team collaboration"
              className="w-[900px] h-auto mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
