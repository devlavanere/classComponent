import reactLogo from '../assets/react.svg'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className='container'>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <h1>React-JS</h1>
            </div>
        </>
    )
}

export default Header
