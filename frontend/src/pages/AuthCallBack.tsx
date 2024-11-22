import { Card, CardContent } from "@/components/ui/card";
import { axiosInstance } from "@/lib/axios";
import { useUser } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallBack = () => {
  const { isLoaded, user } = useUser();
  const navigate = useNavigate();

  const syncAttempt = useRef(false);

  useEffect(() => {
    const syncUser = async () => {
      try {
        if (!isLoaded || !user || syncAttempt.current) return;

        await axiosInstance.post("/auth/callback", {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          imageUrl: user.imageUrl,
        });
        syncAttempt.current = true;
      } catch (error) {
        console.log(error);
      } finally {
        navigate("/");
      }
    };
    syncUser();
  }, [isLoaded, user, navigate]);

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <Card className="w-[90%] max-w-md bg-zinc-800 border-zinc-600">
        <CardContent className="flex flex-col items-center gap-4 pt-6">
          <Loader className="size-6 text-purple-600 animate-spin" />
          <h3 className="text-zinc-400 font-bold">Logging You In</h3>
          <p className="text-zinc-400 text-sm">Redirecting</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthCallBack;
