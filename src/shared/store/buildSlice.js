import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

export function buildSlice(options) {
  const slice = createSlice(options)

  const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch])
  }

  return {
    ...slice,
    useActions,
  }
}
