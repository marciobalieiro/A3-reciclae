import NavBar from '../navigation/NavBar'
import { Link } from 'react-router-dom'
import ActionRow from '../actions/ActionRow'

export default function Header() {
  return (
    <header className="header">
      <ActionRow align='center'>
        <Link to="/" className="brand">
          <img src="/src/assets/logo.png" alt="" aria-hidden="true" />
            <span>ReciclaÊ</span>
        </Link>
        <NavBar />
        
      </ActionRow>
    </header>
  )
}
