import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { Logo, Send } from "./assets";
import { Header, Sidebar } from "./components";

function App() {
  const { isWeb3Enabled, enableWeb3 } = useMoralis();

  if (!isWeb3Enabled) {
    return (
      <div className="App overflow-hidden h-[100vh] flex flex-col justify-center items-center">
        <Logo className="w-36 h-36" />
        <h2 className="font-semibold text-[2.5rem]">CrossChat</h2>
        <button
          className="btn btn-primary mt-5"
          onClick={async () => await enableWeb3()}
        >
          Connect Wallet
        </button>
      </div>
    );
  } else {
    return (
      <div className="App overflow-hidden h-[100vh] ">
        <Header />
        <div className="flex bg-[#F1F6FB] ">
          <Sidebar />
          <div className="msgContainer h-[100vh] w-full rounded-none flex flex-col items-center">
            <div className="msgcontent w-[75%]">
              <div className="chat chat-start">
                <div className="chat-bubble bg-white text-[#232A30] drop-shadow-sm">
                  It's over Anakin, <br />I have the high ground.
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble bg-white text-[#232A30] drop-shadow-sm">
                  You underestimate my power!
                </div>
              </div>
            </div>
            <div className="input absolute bottom-3 w-2/3 flex rounded-none bg-transparent gap-2">
              <input type="text" className="input w-[100%]" />
              <button className="btn btn-circle bg-[#5C15F9] border-none hover:bg-[#4F0BE6] overflow-hidden">
                <Send className="w-7 relative -top-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
