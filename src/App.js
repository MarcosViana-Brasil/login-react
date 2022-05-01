/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.css'
import qa from './assets/qa-new-g.png'
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrapper-login">
          <form action="" className="login-form">
            <span className="login-form-title">Bem Vindo</span>
            <span className="login-form-title">
              <img src={qa} alt="logo" />
            </span>

            <div className="wrapper-input">
              <input
                className={email !== '' ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email" />
            </div>

            <div className="wrapper-input">
              <input
                className={password !== '' ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password" />
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-criar-conta">
              <span className="text1">Não possui conta ?</span>
              <a href="#" className="text2">
                Criar conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
