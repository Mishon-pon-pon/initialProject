import React from "react";
import { Container } from "inversify";
import { DIContainerContext } from "../../../app/DIContainerProvider";

/**
 * Кастомный хук для работы с контейнером.
 */
export default function useDiContainer(): Container {
  const diContainer = React.useContext(DIContainerContext);
  return diContainer as Container;
}
