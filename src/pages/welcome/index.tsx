import { useFormik } from "formik";

import { api } from "../../services/api";

import { WelcomeContainer } from "./style";

export function Welcome() {
  const formik = useFormik({
    initialValues: {
      question: "",
    },
    onSubmit: async ({ question }, helper) => {
      alert(question);

      const prompt = new URLSearchParams();
      prompt.append("prompt", question);

      const result = await api.get(prompt.toString());

      console.log("### result", result);

      helper.resetForm();
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
