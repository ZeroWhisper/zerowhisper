import Typewriter from "typewriter-effect";
import { useFormik } from "formik";
import { useState } from "react";

import { chatApi } from "~/services/chat-api";

import { ChatContainer } from "./style";

type InterationType = {
  question: string;
  answer: string;
};

export function ChatPage() {
  const [messages, setMessages] = useState<InterationType[]>([]);

  const formik = useFormik({
    initialValues: {
      question: "",
    },
    onSubmit: async ({ question }, helper) => {
      const body = {
        url: "https://gptfree.appgps.com.br",
        method: "GET",
        query: `prompt=${question}`,
      };

      try {
        const response = await chatApi.post<ResponseRoot>("/cors", body);

        setMessages([...messages, { question, answer: response.data.answer }]);

        helper.setFieldValue("question", "");
      } catch (e) {
        console.info("Error on try to do a request");
      }
    },
  });

  return (
    <ChatContainer>
      <title>I'm Chat</title>
      <form className="input-core" onSubmit={formik.handleSubmit}>
        <div>Type your question:</div>
        <div className="input-row">
          <input
            type="text"
            value={formik.values.question}
            name="question"
            onChange={formik.handleChange}
          />
          <button type="submit">OK</button>
        </div>
      </form>
      <div>
        {messages.map(({ question, answer }, index) => {
          return (
            <div className="box-output" key={index}>
              <div>
                <span>{index + 1}. </span>
                <span>{question}</span>
              </div>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(answer).start();
                }}
              />
            </div>
          );
        })}
      </div>
    </ChatContainer>
  );
}

export interface ResponseRoot {
  answer: string;
  responseTime: string;
  respondingProvider: string;
  serverDateTime: string;
  developerInfo: DeveloperInfo;
}

export interface DeveloperInfo {
  nome: string;
  numero: string;
  email: string;
}
