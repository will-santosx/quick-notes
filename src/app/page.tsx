"use client";
import { axiosFetch } from "@/utils/axiosService";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import LoadingPage from "./components/ui/AppLoading";
import NoteCard from "./components/ui/NoteCard";
import { useRouter } from "next/navigation";

interface Note {
  id: number;
  title: string;
  content: string;
  color: string;
  created_at: string;
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const requestData = async () => {
      const token = Cookies.get("jwt");
      try {
        const response = await axiosFetch.get("/api/notes", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNotes(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    requestData();
  }, [notes]);

  if (loading) return <LoadingPage />;
  if (notes.length < 1)
    return (
      <div className="text-center">
        <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold">
          nenhuma anotação encontrada.
        </h1>
      </div>
    );

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="text-center">
        <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold">
          suas anotações
        </h1>
        <span className="text-[14px] sm:text-[16px] lg:text-[20px]">
          aqui estão suas anotações criadas.
        </span>
      </div>
      <div className="flex flex-wrap w-full justify-center gap-x-[50px] gap-y-[30px]">
        {notes.map((note) => (
          <>
            <NoteCard
              title={note.title}
              date={note.created_at}
              bg={note.color}
              onClick={() => {
                router.push("/anotacao/" + note.id);
              }}
            />
          </>
        ))}
      </div>
    </div>
  );
}
