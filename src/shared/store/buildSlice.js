import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useAppDispatch } from '@/shared/hooks'

export function buildSlice(options) {
  const slice = createSlice(options)

  const useActions = () => {
    const dispatch = useAppDispatch()
    return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch])
  }

  return {
    ...slice,
    useActions,
  }
}
