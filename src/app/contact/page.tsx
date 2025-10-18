"use client";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <>
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-700/50 p-4">
        <div className="mb-4">
          <button className="flex items-center gap-2 text-white mb-4 w-full">
            Contacts
          </button>
        </div>
        <div className="ml-6 space-y-3">
          <div className="flex items-center gap-2 text-slate-300">
            <Mail className="w-4 h-4" />
            <span className="text-sm">dev.ocean0721@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Phone className="w-4 h-4" />
            <span className="text-sm">+91-9653180272</span>
          </div>
        </div>
      </aside>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center">
        {!formSubmitted ? (
          <div className="w-full max-w-md p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-slate-400 mb-2">_name:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-slate-900/50 border border-slate-700 rounded px-4 py-3 text-white focus:border-teal-400 focus:outline-none"
                  placeholder="Jonathan Davis"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-2">_email:</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-slate-900/50 border border-slate-700 rounded px-4 py-3 text-white focus:border-teal-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-2">_message:</label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-slate-900/50 border border-slate-700 rounded px-4 py-3 text-white h-32 focus:border-teal-400 focus:outline-none"
                  placeholder="your message here ..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded transition-colors"
              >
                submit-message
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl text-white mb-4">Thank you! 🤘</h2>
            <p className="text-slate-400 mb-2">
              Your message has been accepted.
            </p>
            <p className="text-slate-400 mb-6">You will recieve answer soon!</p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="bg-orange-400 hover:bg-orange-500 text-slate-900 px-6 py-3 rounded font-medium transition-colors"
            >
              send-new-message
            </button>
          </div>
        )}
      </div>

      {/* Code Preview */}
      <div className="w-96 border-l border-slate-700/50 p-6 overflow-y-auto">
        <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm">
          <div className="text-teal-400 mb-4">
            const <span className="text-purple-400">button</span> =
            document.querySelector(
            <span className="text-orange-300">'#sendBtn'</span>);
          </div>

          <div className="text-teal-400 mb-2">
            const <span className="text-purple-400">message</span> = {"{"}
          </div>
          <div className="ml-4 space-y-1 mb-2">
            <div>
              <span className="text-purple-400">name</span>:{" "}
              <span className="text-orange-300">"{formData.name || ""}"</span>,
            </div>
            <div>
              <span className="text-purple-400">email</span>:{" "}
              <span className="text-orange-300">"{formData.email || ""}"</span>,
            </div>
            <div>
              <span className="text-purple-400">message</span>:{" "}
              <span className="text-orange-300">
                "{formData.message || ""}"
              </span>
              ,
            </div>
          </div>
          <div>{"}"}</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
