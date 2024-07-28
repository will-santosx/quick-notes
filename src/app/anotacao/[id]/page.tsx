"use client";
import { axiosFetch } from "@/utils/axiosService";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingPage from "@/app/components/ui/AppLoading";
import { ArrowLeft, Trash2 } from "lucide-react";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import Button from "@/app/components/ui/Button";

interface NoteData {
  id?: number;
  title?: string;
  content?: string;
  color?: string;
  authorId?: number;
  created_at?: string;
}

export default function NotePage() {
  const [noteData, setNoteData] = useState<NoteData | null>(null);
  const [isLoading, setLoading] = useState(false);
  const params = useParams();
  const router = useRouter();
  const token = Cookies.get("jwt");

  const convertDateTime = (isoString: string): string => {
    const date = parseISO(isoString);
    return format(date, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
  };

  const colorMapping: {
    [key: string]: { bg: string };
  } = {
    "#3CA7FF": {
      bg: "bg-[#C4E5FF]",
    },
    "#FF4C3C": {
      bg: "bg-[#FFC9C4]",
    },
    "#7D3CFF": {
      bg: "bg-[#D8C4FF]",
    },
    default: {
      bg: "bg-[#E2FFE0]",
    },
  };

  const { bg: bgColor } =
    colorMapping[noteData?.color as string] || colorMapping["default"];

  async function removeNote() {
    const id = params.id;
    try {
      setLoading(true);
      await axiosFetch.delete(`/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      router.push("/");
    } catch (error) {
      console.error("Failed to delete note", error);
    } finally {
      setLoading(false);
    }
  }

  async function getNoteData() {
    const id = params.id;
    try {
      setLoading(true);
      const response = await axiosFetch.get("api/notes/" + id, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response) {
        const note = await response.data;
        if (note) {
          setNoteData(note);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getNoteData();
  }, []);

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Text,
      Bold,
      Italic,
      BulletList,
      ListItem,
    ],
    content: "",
    editable: false,
    immediatelyRender: true,
    editorProps: {
      attributes: {
        class: "dark:bg-gray-600 bg-gray-300 rounded-md p-3",
      },
    },
  });

  useEffect(() => {
    if (editor && noteData?.content) {
      editor.commands.setContent(noteData.content);
    }
  }, [editor, noteData]);

  return (
    <div>
      {isLoading && <LoadingPage />}
      {!isLoading && noteData && (
        <div className={`w-full flex flex-col gap-[40px]`}>
          <div
            className={`w-full flex ${bgColor} rounded-md text-gray-900 items-center justify-between p-3`}
          >
            <button
              onClick={() => {
                router.push("/");
              }}
            >
              <ArrowLeft />
            </button>
            <div className="text-end">
              <h1 className="font-semibold text-[20px] truncate">
                {noteData.title}
              </h1>
              <h2 className="font-medium text-[15px]">
                criação: {convertDateTime(noteData.created_at as string)}
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1>Anotação:</h1>
            <EditorContent editor={editor} />
          </div>
          <div>
            <Button
              onClick={() => removeNote()}
              title="apagar"
              icon={<Trash2 />}
              type="button"
            />
          </div>
        </div>
      )}
    </div>
  );
}
