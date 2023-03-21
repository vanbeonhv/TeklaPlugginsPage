import { AiFillHeart } from 'react-icons/ai';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
    <section className='pt-12 w-full '>
      <div className='container'>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 mx-5 mx-12'>
          <div className='w-full lg:mt-16 xl:mt-20'>
            <h1 className='text-5xl font-bold mb-5 cursor-default '>
              Try some useful Tekla plugins
            </h1>
            <p className='inline-block text-gray-600 font-medium text-lg cursor-default'>
              Developed with <AiFillHeart className='text-red-600 m-0 inline' />{' '}
              for <span className='text-bright-blue-500 font-bold'>Tekla</span>{' '}
              modellers, especially working on{' '}
              <span className='text-bright-blue-500 font-bold'>PPVC</span>{' '}
              Project.
              <br />
              These plugins will help works faster and save a lot of time.
            </p>
            <div className='mt-5'>
              <Link to='/plugins'>
                <Button btnType='btn-primary'>Download plugins</Button>
              </Link>
              <Button btnType='btn-secondary'>How to install?</Button>
            </div>
          </div>
          <div className='w-full mt-10'>
            <img
              src='https://themes.3rdwavemedia.com/coderpro/bs5/2.0/assets/images/promo-figure-alt.svg'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
