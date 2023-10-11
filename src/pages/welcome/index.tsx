import { useFormik } from "formik";

// import { api } from "../../services/api";

import { WelcomeContainer } from "./style";

import axios from "axios";

const baseURL = "http://localhost:3333";
const api = axios.create({ baseURL });

export function Welcome() {
  const formik = useFormik({
    initialValues: {
      question: "",
    },
    onSubmit: async ({ question }) => {
      alert(question);

      const body = {
        url: "https://gptfree.appgps.com.br/prompt=What%20day%20is%20today?",
        method: "GET",
      };

      const response = await api.post("http://localhost:3333", body);

      // const response = await axios.post("http://localhost:3333/fix-cors", {
      //   url: "https://gptfree.appgps.com.br/prompt=What%20day%20is%20today?",
      //   method: "GET",
      // });

      // const response = await fetch('http://localhost:3333/fix-cors', {
      //   body: {
      //     url: "https://gptfree.appgps.com.br/prompt=What%20day%20is%20today?",
      //     method: "GET",
      //   }
      // })

      // const prompt = new URLSearchParams();
      // prompt.append("prompt", question);

      // const result = await api.get(prompt.toString());

      // console.log("### result", prompt.toString());

      // https://gptfree.appgps.com.br/prompt=What%20day%20is%20today?
      // const url = "https://gptfree.appgps.com.br/" + prompt.toString();

      // const response = await fetch(url, {
      //   headers: {
      //     // "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Origin": "https://gptfree.appgps.com.br/",
      //   },
      // });

      console.log("### response", response);

      // helper.resetForm();
    },
  });

  return (
    <WelcomeContainer>
      <title>I'm Welcome</title>
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
        <div className="box-output">ASDASD</div>
      </div>
    </WelcomeContainer>
  );
}
