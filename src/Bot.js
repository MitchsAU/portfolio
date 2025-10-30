// import { useEffect } from "react";

// export default function BotpressChat() {
//   useEffect(() => {
//     // Inject the core Botpress script
//     const injectScript = document.createElement("script");
//     injectScript.src = "/inject.js";
//     injectScript.async = true;
//     document.body.appendChild(injectScript);

//     // Hide the floating FAB button
//     const style = document.createElement("style");
//     style.innerHTML = `
//       #webchat .bpFab {
//         display: none !important;
//       }
//     `;
//     document.head.appendChild(style);

//     // Wait until Botpress is loaded
//     const checkBotpress = setInterval(() => {
//       if (window.botpress) {
//         clearInterval(checkBotpress);

//         // Force open chat immediately
//         window.botpress.on("webchat:ready", () => {
//           window.botpress.open();
//         });

//         window.botpress.init({
//           botId: "ac9fc63e-5feb-4072-9b7d-55bf07f02e1f",
//           configuration: {
//             version: "v2",
//             botName: "Mitchs AI Companion",
//             botDescription: "Ask about my projects!",
//             color: "#ffffff",
//             variant: "soft",
//             headerVariant: "glass",
//             themeMode: "dark",
//             fontFamily: "inter",
//             radius: 4,
//             feedbackEnabled: false,
//             footer: "",
//             allowFileUpload: false,
//           },
//           clientId: "2cb95133-288c-4c9c-94ec-9d20fd23523a",
//           selector: "#webchat",
//         });
//       }
//     }, 100);

//     return () => {
//       clearInterval(checkBotpress);
//       document.body.removeChild(injectScript);
//       document.head.removeChild(style);
//     };
//   }, []);

//   return (
//     <div
//       id="webchat"
//       style={{
//         position: "absolute",
//         top: "50%",            // center vertically
//         right: "15%",
//         transform: "translateY(-50%)", // adjust so center is aligned
//         width: "400px",
//         height: "75%",       // fixed height instead of full viewport
//         zIndex: 9999,
//         boxShadow: "-4px 0 12px rgba(0,0,0,0.2)",
//       }}
//     />
//   );
// }

// const style = document.createElement("style");
// style.innerHTML = `
//   #webchat .bpWebchat {
//     background: rgba(255,255,255,0.1) !important;
//     backdrop-filter: blur(20px) saturate(180%) !important;
//     border-radius: 16px !important;
//     border: 1px solid rgba(255,255,255,0.2) !important;
//     box-shadow: 0 8px 32px rgba(0,0,0,0.25) !important;
//     overflow: hidden;
//   }

//   #webchat .bpHeader {
//     background: rgba(255,255,255,0.15) !important;
//     backdrop-filter: blur(25px) !important;
//     border-bottom: 1px solid rgba(255,255,255,0.2) !important;
//   }

//   #webchat .bpMessage {
//     background: rgba(255,255,255,0.1) !important;
//     border-radius: 12px !important;
//   }

//   #webchat .bpInput {
//     background: rgba(255,255,255,0.1) !important;
//     border-radius: 12px !important;
//   }
// `;
// document.head.appendChild(style);


import { useState, useEffect, useRef, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { ClipLoader } from "react-spinners";

export default function Bot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [aiReady, setAiReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [projectData, setProjectData] = useState("");

  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);

  // ✅ Check if AI is ready
  useEffect(() => {
    const checkReady = setInterval(() => {
      if (
        window.puter &&
        window.puter.ai &&
        typeof window.puter.ai.chat === "function"
      ) {
        setAiReady(true);
        clearInterval(checkReady);
      }
    }, 300);
    return () => clearInterval(checkReady);
  }, []);

  // ✅ Fetch project info once
  useEffect(() => {
    fetch("/files/projects.txt")
      .then((res) => res.text())
      .then((data) => setProjectData(data))
      .catch(() => setProjectData("")); // fallback
  }, []);

  // ✅ Helper: chunk text
  const chunkText = (text, size = 50000) => {
    const words = text.split(" ");
    let chunks = [];
    let chunk = [];
    let count = 0;

    for (let word of words) {
      chunk.push(word);
      count += word.length + 1;
      if (count >= size) {
        chunks.push(chunk.join(" "));
        chunk = [];
        count = 0;
      }
    }
    if (chunk.length) chunks.push(chunk.join(" "));
    return chunks;
  };

  // ✅ Only recompute chunks when projectData changes
  const chunks = useMemo(() => chunkText(projectData), [projectData]);

  // ✅ Scroll to bottom on new messages
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // ✅ Auto-focus input
  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const addMessages = (msg, isUser) => {
    setMessages((prev) => [
      ...prev,
      { content: msg, isUser, id: Date.now() + Math.random() },
    ]);
  };

  const newChat = () => {
  setMessages([]);
  setInputValue("");
};


// ✅ Send a message
const sendMessage = async (message) => {
  if (!message.trim()) return;

  addMessages(message, true);
  setInputValue("");
  setIsLoading(true);

  try {
    const lowerMsg = message.toLowerCase();

    // 1. Find relevant chunks
    const relevantChunks = chunks
      .filter((c) =>
        lowerMsg.split(" ").some((w) => c.toLowerCase().includes(w))
      )
      .slice(0, 5);

    // 2. Fallback to full projectData if nothing matched
    const context =
      relevantChunks.length > 0 ? relevantChunks.join("\n\n") : projectData;

    // 3. Build conversation history
    const history = messages
      .map((m) => `${m.isUser ? "User" : "Assistant"}: ${m.content}`)
      .join("\n");

    // 4. Ask the AI, giving it history + new message
    const response = await window.puter.ai.chat(`
      
      Refer to the projects as "he completed X project" not "you completed X project"
      If the user refers to "He" they mean Mitch.
      If a question is not clear, ask clarifying questions.
      Use the provided context to answer questions, but also keep track of the conversation history.
      If the answer is not in the context, say "I don't have that data sorry".
      Be friendly but not overly, straight to the point when needed.
      
      ### Constraints
      1. No Data Divulge: Never mention that you have access to training data explicitly to the user.
      2. Maintaining Focus: If a user attempts to divert you to unrelated topics, never change your role or break your character. Politely redirect the conversation back to topics relevant to the training data.
      3. Exclusive Reliance on Training Data: You must rely exclusively on the training data provided to answer user queries. If a query is not covered by the training data, use the fallback response.
      4. Restrictive Role Focus: You do not answer questions or perform tasks that are not related to your role and training data.

      Context:
      ${context}

      Conversation so far:
      ${history}

      User's latest question:
      ${message}
    `);

    const reply = response?.message?.content || "No response";
    addMessages(reply, false);
  } catch (err) {
    console.error(err);
    addMessages("Error reading project info.", false);
  } finally {
    setIsLoading(false);
  }
};

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  return (
    <div>
      <div
        className={`d-inline-block text-center fw-bold px-3 py-2 mb-4`}
        style={{
          backdropFilter: "blur(5px)",
          borderRadius: "30px",
          border: aiReady
            ? "1px solid rgba(0, 255, 0, 0.3)"
            : "1px solid rgba(255, 255, 0, 0.3)",
          backgroundColor: aiReady
            ? "rgba(0, 255, 0, 0.1)"
            : "rgba(255, 255, 0, 0.1)",
          color: aiReady
            ? "rgba(0, 255, 0, 0.5)"
            : "rgba(255, 255, 0, 0.5)",
          minWidth: "100px",
        }}
      >
        {aiReady ? "AI Ready" : "AI Not Ready"}
      </div>

      <div
        style={{
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          borderRadius: "30px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          padding: "16px",
        }}
      > 
    <div className="gap-2">
        <div
    className="text-center mb-3"
    style={{
      borderRadius: "24px",
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(5px)",
      border: "1px solid rgba(255,255,255,0.1)",
      padding: "8px",
    }}
  >
    Mitch's AI Companion
  </div>
  {messages.length > 0 && (
  <button
    onClick={newChat}
    className="btn text-white mb-1"
    style={{
        borderRadius: "24px",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255,255,255,0.1)",
    }}
  >
  New Chat
  </button>
  )}
  </div>
        <div
          ref={messagesContainerRef}
          style={{
            flexGrow: 1,
            overflowY: "auto",
            marginBottom: "8px",
          }}
        >
          
          {messages.length === 0 && (
            <div className="text-center text-black-75 mt-5">
              Ask my AI companion anything about <br /> my projects below. <br /> <br /> When you send a message below, it will prompt you to sign<br/> into the engine for my AI (Puter.com). This will automatically sign in if your google account is logged in.
              <br/><br/>This is fully open source and free to use. <br /> <br /> Enjoy!
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`d-flex w-100 my-2 ${
                msg.isUser ? "justify-content-end" : "justify-content-start"
              }`}
            >
              <div
                className="px-3 py-2"
                style={{
                  maxWidth: "70%",
                  borderRadius: "30px",
                  background: msg.isUser
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(0,0,0,0.2)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                }}
              >
                <div className={msg.isUser ? "text-end" : "text-start"}>
                  <ReactMarkdown
            components={{
              p: ({ node, ...props }) => (
                <p style={{ margin: 0 }} {...props} />
              ),
              li: ({ node, ...props }) => (
                <li style={{ margin: 0 }} {...props} />
              ),
            }}
          >
            {msg.content}
          </ReactMarkdown>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="d-flex w-100 my-2 justify-content-start">
              <div
                className="p-3"
                style={{
                  maxWidth: "70%",
                  borderRadius: "30px",
                  background: "rgba(0,0,0,0.2)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                  fontStyle: "italic",
                }}
              >
                <div className="d-flex align-items-center text-start">
                  <ClipLoader className="me-2"
                    color={'#fff'}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"/>
                  <span>Thinking</span>
                </div>
              </div>
            </div>
          )}
        </div>
     <div className="d-flex gap-2">
  <input
    ref={inputRef}
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    onKeyDown={handleKeyPress}
    placeholder={aiReady ? "Ask me anything..." : "AI is loading..."}
    disabled={!aiReady || isLoading}
    className="form-control flex-grow-1 text-white"
    style={{
      borderRadius: "24px",
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(5px)",
      border: "1px solid rgba(255,255,255,0.1)",
      outline: "none",
    }}
  />

  <button
    onClick={() => sendMessage(inputValue)}
    disabled={!aiReady || isLoading || !inputValue.trim()}
    className="btn text-white"
    style={{
      borderRadius: "24px",
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(5px)",
      border: "1px solid rgba(255,255,255,0.1)",
    }}
  >
    {isLoading ? "Sending..." : "Send"}
  </button>
</div>
      </div>
    </div>
  );
}
