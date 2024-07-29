import { Editor } from "@/components/editor/Editor";
import { Header } from "@/components/Header";
import React from "react";

export default function Document() {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title">this is a fake document title</p>
        </div>
      </Header>
      <Editor />
    </div>
  );
}
