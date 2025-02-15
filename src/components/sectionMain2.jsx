import mainSecond1 from '../assets/Picture.png'
import mainSecond2 from '../assets/Icon (7).png'
import mainSecond3 from '../assets/Dots (4).png'
import mainSecond4 from '../assets/Icon (8).png'
import mainSecond5 from '../assets/Icon (9).png'
import mainSecond6 from '../assets/Icon (10).png'
const SectionMain2 = () => {
  return (
    <>
    <section className='secondMainSection'>
        <aside className='forImgs'>
            <img src={mainSecond1} alt="" />
            <img src={mainSecond5} alt="" className='imgPos1' />
        </aside>
        <aside className='infoSMS'>
            <img src={mainSecond2} alt="" />
            <h2>Santiago Valentín</h2>
            <h4>Content Manager</h4>
            <p>The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.</p>
            <img src={mainSecond3} alt="" />
        </aside>
        <img src={mainSecond4} alt="" className='imgPos2' style={{marginRight: '30px'}}/>
    </section>

    <section className='thirdMainSection'>
      <aside className='infoThirdSection'>
          <h3>Choose your plan</h3>
          <p>There are many reasons to get down and start to get depressed about your situation. </p>
      </aside>
      <aside className='cards'>
      <div className="card card1">
        <h3>Free</h3>
        <h2>$0</h2>
        <p>Free forever</p>
        <p>Up to 2 users</p>
        <p>Github</p>
        <button>GET started</button>
      </div>
      <div className="card card2">
        <h3>Lite</h3>
        <h2>$199</h2>
        <p>Free forever</p>
        <p>Up to 2 users</p>
        <p>Github</p>
        <button>buy now</button>
      </div>
      <div className="card card3">
        <h3>Pro</h3>
        <h2>$399</h2>
        <p>Free forever</p>
        <p>Up to 2 users</p>
        <p>Github</p>
        <button>buy now</button>
      </div>
      <div className="card card4">
        <h3>Free</h3>
        <img src={mainSecond6} alt="" />
        <p>Free forever</p>
        <p>Up to 2 users</p>
        <p>Github</p>
        <button>GET started</button>
      </div>
      </aside>
    </section>
    </>
  )
}

export default SectionMain2