import useDIContainer from '../useDiContainer';

/**
 * Кастомный хук для получения вью-модели.
 *
 * @param vmSymbol Ключ модуля в di контейнере.
 */
export default function useViewModel<T>(vmSymbol: symbol): T {
  const container = useDIContainer();

  if (!container?.isBound(vmSymbol)) {
    throw Error('View model does not bound in container!');
  }

  return container.get<T>(vmSymbol);
}
