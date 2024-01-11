import { createContext, useContext } from 'react'

export const AuthContext = createContext({})

export function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

export function useAuth(): unknown {
  return useContext(AuthContext)
}
