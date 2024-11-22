import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import SignInandOutButton from "./SignInandOutButton";

const TopBar = () => {
const isAdmin = false
    return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
      <div className="flex gap-4 items-center">MusikFied</div>
      <div className="flex items-center gap-4">
        {isAdmin && (
            <Link to={"/admin"}>
                <LayoutDashboard className="size-6 mr-7" />
                Admin Dashboard
            </Link>
        )}
        <SignedIn>
            <SignOutButton/>
        </SignedIn>
        <SignedOut>
            <SignInandOutButton/>
        </SignedOut>
      </div>
    </div>
  );
};

export default TopBar;
