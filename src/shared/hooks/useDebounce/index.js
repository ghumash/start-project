import { useCallback, useRef } from 'react'

/**
 * Хук, который позволяет отменять предыдущий вызов функции пока не истечет delay
 * @param {Function} callback - Функция, вызов которой нужно дебаунсить
 * @param {number} delay - Задержка в миллисекундах
 * @returns {Function} - Дебаунснутая версия переданной функции
 */
export function useDebounce(callback, delay) {
  const timer = useRef(null)

  return useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
      timer.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay],
  )
}
