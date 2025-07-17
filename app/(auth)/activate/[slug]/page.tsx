import UserActivate from "@/component/auth/UserActivate";

const page = async ({ params }: any) => {
  const { slug: token } = await params;

  return (
    <div>
      <UserActivate token={token ? token : ""} />
    </div>
  );
};

export default page;
