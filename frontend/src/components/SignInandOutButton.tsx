import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const SignInandOutButton = () => {
  const { signIn, isLoaded } = useSignIn();
  if (!isLoaded) return null;

  const signInWith =()=>{
    signIn.authenticateWithRedirect({
        strategy:"oauth_google",
        redirectUrl:"/sso-callback",
        redirectUrlComplete: "/auth-callback"
    })
  }

  return (
    <Button
    onClick={() => signInWith()}
      variant={"secondary"}
      className="w-full text-white border-zinc-300 h-11"
    >
      Get to login
    </Button>
  );
};

export default SignInandOutButton;
