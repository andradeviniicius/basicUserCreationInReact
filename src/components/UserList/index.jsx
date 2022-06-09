import { useEffect } from "react";
import styles from "./style.module.css";

export default function UserList({ data }) {
  return (
    <>
      <div className="user-list">
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {user.name} + {user.age}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
