import logo from '../assets/Logo (16).png'
import header1 from '../assets/Device.png'
import header2 from '../assets/Device (1).png'
const Header = () => {
  return (
    <header>
        <nav>
            <div className="ulik">
            <img src={logo} alt="" />
             <ul>
                <li>About</li>
                <li>Gallery</li>
                <li>Pricing</li>
                <li>FAQ</li>
                <li>benefits</li>
             </ul>
            </div>
            <div className="sign">
                <p className='mm'>sign up</p>
                <p>sign up</p>
            </div>
        </nav>
        <section className='firstSectionHeader'>
            <aside className='topFSH'>
                <h1>We Connect <br />
                Startups</h1>
                <div className='btns'>
                    <button className='firstBtn'>DOWLOAND</button>
                    <button className='secBtn'>TRY FOR FREE</button>
                </div>
                <p>Harness The Power Of Your Dreams</p>
            </aside>
            <aside className='imgs'>
                <img src={header1} alt=""  />
                <img src={header2} alt="" className='img2'/>
            </aside>
        </section>
        <div className='pp'><p>Scroll to more</p></div>
        
    </header>
  )
}

export default Header