import { AiFillHeart } from 'react-icons/ai';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { MdFastForward } from 'react-icons/md';
function LandingPage() {
  return (
    <main className='pt-12 w-full '>
      <section className='container'>
        <div className='grid md:grid-cols-2 sm:grid-cols-1'>
          <div className='w-full '>
            <h1 className='text-6xl font-bold mb-5 mt-10 cursor-default '>
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
      </section>
      <section className=' bg-bright-blue-100'>
        <div className='container'>
          <div className='text-center py-14'>
            <h4 className='text-4xl font-bold capitalize'>
              made for BIM modellers
            </h4>
            <p className='capitalize text-xl text-gray-500 pt-5'>
              automate your work
            </p>
          </div>
          <div className='flex '>
            <Card icon={<MdFastForward />} />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
