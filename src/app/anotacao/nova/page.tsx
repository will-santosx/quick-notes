"use client";
import { ArrowRight } from "lucide-react";
import NoteEditor, { NoteEditorHandle } from "../../components/NoteEditor";
import Input from "../../components/ui/Input";
import { FormEvent, useRef } from "react";
import Button from "@/app/components/ui/Button";

export default function NewNote() {
  const editorRef = useRef<NoteEditorHandle>(null);

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();

    if (editorRef.current) {
      const content = editorRef.current.getContent();
      console.log(content);
    }
  };

  return (
    <div className="w-full flex flex-col gap-[40px]">
      <div className="flex flex-col text-center">
        <h1 className="text-[22px] font-semibold">Nova Anotação</h1>
        <span className="lowercase text-[14px]">
          Registre Informações Importantes, Tarefas ou Reflexões Pessoais.
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
            required
          />
          <div className="w-full dark:bg-gray-700 rounded-md h-[320px] overflow-scroll">
            <NoteEditor ref={editorRef} />
          </div>
          <label htmlFor="colors-select">
            escolha uma cor para sua anotação
          </label>
          <select
            className="appearance-none w-[70%] dark:bg-gray-700 outline-none p-2 rounded-md"
            name="colors-select"
            required
          >
            <option disabled>escolha uma opção</option>
            <option value={"blue"}>azul</option>
            <option value={"red"}>vermelho</option>
            <option value={"green"}>verde</option>
            <option value={"purple"}>roxo</option>
          </select>
          <Button type="submit" title="anotar" />
        </form>
      </div>
    </div>
  );
}
