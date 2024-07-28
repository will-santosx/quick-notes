"use client";
import NoteEditor, { NoteEditorHandle } from "../../components/NoteEditor";
import Input from "../../components/ui/Input";
import { FormEvent, useRef, useState } from "react";
import Button from "@/app/components/ui/Button";
import { axiosFetch } from "@/utils/axiosService";
import LoadingPage from "@/app/components/ui/AppLoading";
import Cookies from "js-cookie";

export default function NewNote() {
  const [InputNoteTitle, setInputTitle] = useState("");
  const [selectValue, setSelectValue] = useState("#3CA7FF");
  const [isLoading, setLoading] = useState(false);

  const list = [
    { id: "#3CA7FF", name: "azul" },
    { id: "#FF4C3C", name: "vermelho" },
    { id: "#45FF3C", name: "verde" },
    { id: "#7D3CFF", name: "roxo" },
  ];
  const editorRef = useRef<NoteEditorHandle>(null);

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    const token = Cookies.get("jwt");

    if (editorRef.current) {
      const content = editorRef.current.getContent();
      console.log(content);
      setLoading(true);

      const response = await axiosFetch.post(
        "/api/notes",
        {
          title: InputNoteTitle,
          color: selectValue,
          content: content,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      try {
        setInputTitle("");
        return true;
      } catch (err) {
        setLoading(false);
        return false;
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-[40px]">
      {!isLoading && (
        <>
          <div className="text-center">
            <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold">
              nova anotação
            </h1>
            <span className="text-[14px] sm:text-[16px] lg:text-[20px]">
              registre informações importantes, tarefas ou reflexões pessoais.
            </span>
          </div>
          <div className="w-full text-center">
            <form
              onSubmit={(e) => handleSave(e)}
              className="w-full h-full items-center flex flex-col gap-[20px]"
            >
              <Input
                type="text"
                name="note-name"
                placeholder="Nome da Anotação"
                autoFocus
                onChange={(e) => {
                  setInputTitle(e.target.value);
                }}
                required
              />
              <div className="w-full dark:bg-gray-700 bg-gray-300 rounded-md h-[320px] overflow-scroll">
                <NoteEditor ref={editorRef} />
              </div>
              <label htmlFor="colors">escolha uma cor para sua anotação</label>
              <select
                className="appearance-none w-[70%] dark:bg-gray-700 bg-gray-300 outline-none p-2 rounded-md"
                name="colors"
                required
                value={selectValue}
                onChange={(e) => setSelectValue(e.currentTarget.value)}
              >
                <option disabled>escolha uma opção</option>
                {list.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <Button type="submit" title="anotar" />
            </form>
          </div>
        </>
      )}
      {isLoading && <LoadingPage />}
    </div>
  );
}
