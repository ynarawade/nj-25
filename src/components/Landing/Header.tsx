import { Button } from "@/components/ui/button";
import ToogleMode from "@/components/ui/ToogleMode";
import Link from "next/link";

function LandingHeader() {
  return (
    <nav className="w-full border-b sticky top-0 bg-transparent backdrop-blur-xl">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        <h2 className="text-lg font-semibold">NJ25</h2>

        <div className="flex items-center gap-x-4">
          <div className="hidden lg:flex items-center gap-x-4 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Explore Campaigns
            </Link>
            <Link href="/" className="hover:text-foreground">
              How It Works
            </Link>
            <Link href="/" className="hover:text-foreground">
              Features
            </Link>
          </div>
          <ToogleMode />

          <Button variant="outline" className="rounded-full">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default LandingHeader;
