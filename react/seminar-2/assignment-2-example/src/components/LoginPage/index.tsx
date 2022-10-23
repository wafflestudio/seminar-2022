import styles from "./index.module.css";
import { Form, InputWithLabel } from "../Form";
import { useState } from "react";
import { useSessionContext } from "../../contexts/SessionContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const { login } = useSessionContext();
  const navigate = useNavigate();
  return (
    <div className={styles["container"]}>
      <Form
        className={styles["form"]}
        onSubmit={(e) => {
          e.preventDefault();
          if (loginForm.username === "") alert("ID를 입력하세요!");
          login(loginForm.username);
          navigate("/");
        }}
      >
        <h2>로그인</h2>
        <div className={styles["form-wrapper"]}>
          <InputWithLabel
            value={loginForm}
            label="ID"
            name="username"
            setValue={setLoginForm}
          />
          <InputWithLabel
            value={loginForm}
            label="PASSWORD"
            name="password"
            setValue={setLoginForm}
            type="password"
          />
          <button className={styles["login-button"]} type="submit">
            로그인
          </button>
        </div>
      </Form>
    </div>
  );
}
