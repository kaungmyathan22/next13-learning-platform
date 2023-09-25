import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-medium text-sky-700">
        this is the protected page
      </p>
      <Button variant={"destructive"}>Click me</Button>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
