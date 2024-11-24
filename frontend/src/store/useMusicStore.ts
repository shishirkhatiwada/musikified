import { axiosInstance } from "@/lib/axios";
import { Albumb, Song } from "@/types";
import { create } from "zustand";

interface MusicStore {
  albums: Albumb[];
  songs: Song[];
  isLoading: boolean;
  error: string | any;
  fetchAlbums: () => Promise<void>;
  fetchAlbumById:(id:string)=> Promise<void>
  currentAlbum: Albumb | null
}


//these are initial states
export const useMusicStore = create<MusicStore>((set) => ({
  albums: [],
  songs: [],
  isLoading: false,
  error: null,
  currentAlbum: null,

  fetchAlbums: async () => {
		set({ isLoading: true, error: null });

		try {
			const response = await axiosInstance.get("/albumb");
			set({ albums: response.data });
		} catch (error: any) {
			set({ error: error.response.data.message });
		} finally {
			set({ isLoading: false });
		}
	},

	fetchAlbumById: async (id) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axiosInstance.get(`/albumb/${id}`);
			set({ currentAlbum: response.data });
		} catch (error: any) {
			set({ error: error.response.data.message });
		} finally {
			set({ isLoading: false });
		}
	},

}));
