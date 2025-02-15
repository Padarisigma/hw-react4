import mainSec4 from '../assets/Big.png'
import mainSec5 from '../assets/Picture (1).png'
const MainSection3 = () => {
  return (
    <>
    <section className='fourSectionMain'>
      <aside className='infoSec4'>
        <h2>Portfolio</h2>
        <p>Failure will never overtake me if my determination to <br /> succeed is strong enough. </p>
      </aside>
      <aside className='gridImgs'>
        <img src={mainSec4} alt="" />
        <img src={mainSec4} alt="" />
        <img src={mainSec4} alt="" />
        <img src={mainSec4} alt="" />
        <img src={mainSec4} alt="" />
        <img src={mainSec4} alt="" />
      </aside>
    </section>

    <section className='fiveMainSection'>
       <div className='cont'>
        <img src={mainSec5} alt="" />
        <div className='infcard'>
            <div className='infoo'>
               <h3>There are many reasons to get down</h3>
            <h6>The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.</h6> 
            </div>
            <div className='nnn'>
                <p className='mm'>🤍 10 Oct 21, by Jane Ostin</p>
                <p className='aa'>READ MORE</p>
            </div>
        </div>
       </div>
       <div className='cont'>
        <img src={mainSec5} alt="" />
        <div className='infcard'>
            <div className='infoo'>
               <h3>There are many reasons to get down</h3>
            <h6>The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.</h6> 
            </div>
            <div className='nnn'>
                <p className='mm'>🤍 10 Oct 21, by Jane Ostin</p>
                <p className='aa'>READ MORE</p>
            </div>
        </div>
       </div>
       <div className='cont'>
        <img src={mainSec5} alt="" />
        <div className='infcard'>
            <div className='infoo'>
               <h3>There are many reasons to get down</h3>
            <h6>The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.</h6> 
            </div>
            <div className='nnn'>
                <p className='mm'>🤍 10 Oct 21, by Jane Ostin</p>
                <p className='aa'>READ MORE</p>
            </div>
        </div>
       </div>
    </section>
    </>
  )
}

export default MainSection3