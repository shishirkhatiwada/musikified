import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChatStore } from "@/store/useChatStore";
import { useUser } from "@clerk/clerk-react";
import { HeadphonesIcon, Music2, User } from "lucide-react";
import { useEffect } from "react";

const FriendsActivities = () => {
  const { users, fetchUser } = useChatStore();
  const { user } = useUser();

  useEffect(() => {
    if (user) fetchUser();
  }, [fetchUser, user]);

  const isPlaying = false;
  return (
    <div className="h-full bg-zinc-800 rounded-lg flex flex-col">
      <div className="p-4 flex justify-between items-center border-b border-zinc-700">
        <div className="flex items-center gap-2">
          <User className="size-6 shrink-0" />
          <h2>what they are listening to </h2>
        </div>
      </div>

      {!user && <LoginPrompt />}

      <ScrollArea>
        <div className="p-4 space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="cursor-pointer hover:bg-zinc-800/50 p-3 rounded-md transistion-color group "
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="size-8 border border-zinc-800">
                    <AvatarImage src={user.imageUrl} alt={user.firstName} />
                    <AvatarFallback>{user.firstName[0]}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-zinc-900 bg-zinc-900 group-hover:bg-zinc-50`}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 min-w-0 ">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm text-white">
                      {user.fullName}
                    </span>
                    {isPlaying && (
                      <Music2 className="size-4.5 text-emerald-300 shrink-0" />
                    )}
                  </div>
                  {isPlaying ? (
                    <div className="mt-1">
                      <div className="mt-1 text-sm text-white font-medium truncate ">
                        Hello
                      </div>
                      <div className="text-xs text-zinc-400 truncate">
                        by Adele
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-zinc-400 ">idle</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default FriendsActivities;

const LoginPrompt = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
    <div className="relative">
      <div
        className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full blur-lg
       opacity-75 animate-pulse"
        aria-hidden="true"
      />
      <div className="relative bg-zinc-900 rounded-full p-4">
        <HeadphonesIcon className="size-8 text-emerald-400" />
      </div>
    </div>

    <div className="space-y-2 max-w-[250px]">
      <h3 className="text-lg font-semibold text-white">
        See What Friends Are Playing
      </h3>
      <p className="text-sm text-zinc-400">
        Login to discover what music your friends are enjoying right now
      </p>
    </div>
  </div>
);
