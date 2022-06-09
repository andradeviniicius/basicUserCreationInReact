import React, { useState } from "react";

import Modal from "../Modal";

import styles from "./style.module.css";

export default function UserInput({ sendDataUpwards }) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const [errorDesc, setErrorDesc] = useState({
    emptyName: false,
    emptyAge: false,
    negativeValue: false,
  });

  function submitHandler(e) {
    e.preventDefault();

    const obj = {
      name: userName,
      age: userAge,
      id: Math.random(),
    };
    switch (true) {
      case userName.trim().length === 0:
        setIsWrong(true);
        setErrorDesc({ ...errorDesc, emptyName: true });
        break;
      case userAge.trim().length === 0:
        setIsWrong(true);
        setErrorDesc({ ...errorDesc, emptyAge: true });
        break;
      case +userAge < 1 || +userAge > 100:
        setIsWrong(true);
        setErrorDesc({ ...errorDesc, negativeValue: true });
        break;
      default:
        setIsWrong(false);
        setErrorDesc({
          emptyName: false,
          emptyAge: false,
          negativeValue: false,
        });
        sendDataUpwards(obj);
        setUserName("");
        setUserAge("");
    }
  }

  return (
    <>
      {isWrong && (
        <Modal
          emptyAge={errorDesc.emptyAge}
          emptyName={errorDesc.emptyName}
          negativeValue={errorDesc.negativeValue}
        />
      )}
      <div className={styles.container}>
        <form className={styles.form} onSubmit={submitHandler} action="">
          <input
            className={styles["formInput-text"]}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            placeholder="name"
            value={userName}
          />
          <input
            className={styles["formInput-number"]}
            onChange={(e) => {
              setUserAge(e.target.value);
            }}
            type="number"
            placeholder="age"
            value={userAge}
          />
          <button className={styles["formBtn-submit"]} type="submit">
            Teste
          </button>
        </form>
      </div>
    </>
  );
}
