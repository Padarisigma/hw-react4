import icon1 from '../assets/Icon (11).png'
import icon2 from '../assets/Icon (12).png'
import icon3 from '../assets/Icon (13).png'
import icon4 from '../assets/Icon (14).png'
const Footer = () => {
  return (
    <footer>
      <div className='topFooter'>
        <h4>Contacts</h4>
        <div className='minidivv'>
          <img src={icon1} alt="" />
          <p>1772 Nevskaya Street NW, Suite 21389,  <br />Atlanta, GA 902344</p>
        </div>
        <div className='minidivv' >
          <img src={icon2} alt="" />
          <p>+1 789 123456</p>
        </div>
        <div className='minidivv'>
          <img src={icon3} alt="" />
          <p>hello@containers.kit</p>
        </div>
      </div>
      <div className='imgBack'>
        <img src={icon4} alt="" />
      </div>
      
      <section className='footer'>
      <div className='miniBoxes'>
        <h3>Products</h3>
        <p>Pricing</p>
        <p>Tearns</p>
        <p>Education</p>
        <p>Refer a friend</p>
        <p>Updates</p>
      </div>
      <div className='miniBoxes'>
        <h3>Get Started</h3>
        <p>Tutorial</p>
        <p>Resources</p>
        <p>Guides</p>
        <p>Examples</p>
        <p>Docs</p>
      </div>
      <div className='miniBoxes'>
        <h3>About</h3>
        <p>Stories</p>
        <p>Community</p>
        <p>Blog</p>
        <p>Careers</p>
        <p>Brand Assets</p>
      </div>
      <div className='miniBoxes'>
        <h3>Account</h3>
        <p>Sign in</p>
        <p>Create Account</p>
        <p>Support</p>
      </div>
      </section>
    </footer>
  )
}

export default Footer