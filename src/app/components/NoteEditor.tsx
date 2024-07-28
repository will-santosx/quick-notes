"use client";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import { useCallback, useImperativeHandle, forwardRef } from "react";

import {
  Heading1,
  Heading2,
  Heading3,
  BoldIcon,
  ItalicIcon,
  List,
} from "lucide-react";

export type NoteEditorHandle = {
  getContent: () => any;
};

const NoteEditor = forwardRef<NoteEditorHandle>((props, ref) => {
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
    content: "<p>Adicione suas Anotações</p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "border-2 border-transparent focus:border-2 focus:border-oppacity-30 prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
  }) as Editor;

  useImperativeHandle(ref, () => ({
    getContent: () => {
      return editor ? editor.getHTML() : null;
    },
  }));

  const toggleBold = useCallback(() => {
    editor.chain().focus().toggleBold().run();
  }, [editor]);

  const toggleH1 = useCallback(() => {
    editor.chain().focus().toggleHeading({ level: 1 }).run();
  }, [editor]);

  const toggleH2 = useCallback(() => {
    editor.chain().focus().toggleHeading({ level: 2 }).run();
  }, [editor]);

  const toggleH3 = useCallback(() => {
    editor.chain().focus().toggleHeading({ level: 3 }).run();
  }, [editor]);

  const toggleItalic = useCallback(() => {
    editor.chain().focus().toggleItalic().run();
  }, [editor]);

  const toggleBulletList = useCallback(() => {
    editor.chain().focus().toggleBulletList().run();
  }, [editor]);

  return (
    <>
      <div className="border-b-2 p-2 border-black border-opacity-30 flex justify-between">
        <div className="flex items-center gap-3 lg:gap-6">
          <button type="button" onClick={toggleH1}>
            <Heading1 className="w-[18px] md:w-[22px]" />
          </button>
          <button type="button" onClick={toggleH2}>
            <Heading2 className="w-[18px] md:w-[22px]" />
          </button>
          <button type="button" onClick={toggleH3}>
            <Heading3 className="w-[18px] md:w-[22px]" />
          </button>
        </div>
        <div className="flex items-center gap-3 lg:gap-6">
          <button type="button" onClick={toggleBold}>
            <BoldIcon className="w-[18px] md:w-[22px]" />
          </button>
          <button type="button" onClick={toggleItalic}>
            <ItalicIcon className="w-[18px] md:w-[22px]" />
          </button>
        </div>
        <button type="button" onClick={toggleBulletList}>
          <List className="w-[18px] md:w-[22px]" />
        </button>
      </div>
      <EditorContent editor={editor} />
    </>
  );
});

NoteEditor.displayName = "NoteEditor";

export default NoteEditor;
