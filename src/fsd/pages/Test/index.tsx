import React from "react";

import { CounterWidget } from "fsd/widgets/counter";
import {
  ClearButton,
  DecrementButton,
  IncrementButton,
} from "fsd/featrures/counter";

import cls from "./index.module.css";
import { Button } from "fsd/shared/ui/atoms/controls/button";
import { UserFormWidget } from "fsd/widgets/UserForm";
import { UserForm } from "fsd/entities/user";
import { SaveUser } from "fsd/featrures/user";

export const Test = () => {
  return (
    <div style={{ padding: "15px", width: "100%", border: "1px solid" }}>
      <h1>Страница</h1>
      <SaveUser text="Сохранить(вне формы)" />
      <div className={cls.test}>
        <ClearButton />
        <div className={cls.card}>
          <h1>Карточка</h1>
          <CounterWidget />
          <div style={{ margin: "15px" }}>
            <IncrementButton>
              <Button onClick={() => {}}>Increment</Button>
            </IncrementButton>
          </div>
        </div>
        <div className={cls.card}>
          <h1>Карточка</h1>
          <CounterWidget />
          <div style={{ margin: "15px" }}>
            <IncrementButton>
              <Button onClick={() => {}}>Increment</Button>
            </IncrementButton>
            <DecrementButton>
              <button>DECREMENT</button>
            </DecrementButton>
          </div>
        </div>
        <div className={cls.card}>
          <h1>Карточка</h1>
          <CounterWidget />
          <div style={{ margin: "15px" }}>
            <IncrementButton>
              <Button onClick={() => {}}>Increment</Button>
            </IncrementButton>
            <DecrementButton>
              <button>DECREMENT</button>
            </DecrementButton>
          </div>
        </div>
        <div className={cls.card}>
          <h1>Карточка</h1>
          <CounterWidget />
          <div style={{ margin: "15px" }}>
            <IncrementButton>
              <Button onClick={() => {}}>Increment</Button>
            </IncrementButton>
            <DecrementButton>
              <button>DECREMENT</button>
            </DecrementButton>
          </div>
        </div>
        <UserFormWidget />
        <UserForm />
      </div>
    </div>
  );
};
