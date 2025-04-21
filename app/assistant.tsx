"use client";

import { useState } from "react";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import { ThreadList } from "@/components/assistant-ui/thread-list";

export const Assistant = () => {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {/* Mobile Header with Toggle */}
      <div className="md:hidden flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-lg font-semibold">Chat Assistant</h1>
        <button
          className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div className="grid md:grid-cols-[200px_1fr] gap-x-2 h-screen px-4 py-4">
        {/* Sidebar - hidden on mobile unless toggled */}
        <div className={`${sidebarOpen ? "block" : "hidden"} md:block transition-all ease-in-out duration-300`}>
          <ThreadList />
        </div>

        {/* Main chat area */}
        <div className="flex-1">
          <Thread />
        </div>
      </div>
    </AssistantRuntimeProvider>
  );
};
