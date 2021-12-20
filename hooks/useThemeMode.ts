import { createLocalStorageStateHook } from 'use-local-storage-state'
import { useMediaQuery } from '@mui/material'
import { useCallback, useMemo } from 'react'

const useStorageStateHook = createLocalStorageStateHook('system')

const modesAvailable = ['system', 'dark', 'light']

export default function useThemeMode() {
  const [modePrivate, setThemeMode, isPersistent] = useStorageStateHook()
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')

  // theme mode can be one of modesAvailable
  const themeMode = useMemo(
    () => (modePrivate == null || !modesAvailable.includes(modePrivate as string) ? 'system' : modePrivate),
    [modePrivate],
  )

  // palette type is either 'light' or 'dark'
  const paletteType = useMemo(() => {
    if (themeMode === 'system') {
      return prefersLightMode ? 'light' : 'dark'
    }
    return themeMode
  }, [prefersLightMode, themeMode])

  // toggle between light and dark
  const toggleMode = useCallback(() => {
    if (themeMode === 'light') setThemeMode('dark')
    else setThemeMode('light')
  }, [setThemeMode, themeMode])

  return {
    paletteType,
    themeMode,
    setThemeMode,
    toggleMode,
    modesAvailable,
    isPersistent,
  }
}
