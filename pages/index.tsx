import { useAuth0 } from "@auth0/auth0-react"


export default function Home() {
  const {loginWithRedirect} = useAuth0()
  return (
    <>
    <p>ログインする</p>
    <button onClick={() => loginWithRedirect()}>ログインする</button>
    </>
  )
}
