import { axiosInstance } from "@/lib/axios";
import { Albumb, Song } from "@/types";
import { create } from "zustand";

interface MusicStore {
  albums: Albumb[];
  songs: Song[];
  isLoading: boolean;
  error: string | any;
  fetchAlbums: () => void;
}

export const useMusicStore = create<MusicStore>((set) => ({
  albums: [],
  songs: [],
  isLoading: false,
  error: null,

  fetchAlbums: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await axiosInstance.get("/albumb");
      set({ albums: response.data });
    } catch (error: any) {
      set({ error: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));
