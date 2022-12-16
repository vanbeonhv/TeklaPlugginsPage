import './App.css';
import { AiFillHeart } from 'react-icons/ai';
function App() {
  return (
    <section className='pt-12'>
      <div className='mx-5 columns-2'>
        <div className='w-full'>
          <h1 className='text-5xl font-bold mb-5 cursor-default'>
            Try some usefull Tekla pluggins
          </h1>
          <p className='inline-block text-gray-600 font-medium text-lg cursor-default'>
            Developed with <AiFillHeart className='text-red-600 m-0 inline' />{' '}
            for <span className='text-bright-blue-500 font-bold'>Tekla</span>{' '}
            modellers, especially working on{' '}
            <span className='text-bright-blue-500 font-bold'>PPVC</span>{' '}
            Project.
            <br />
            These pluggins will help works faster and save a lot of time.
          </p>
          <div className='inline'></div>
        </div>
        <div className='w-full'>
          <img
            src='https://themes.3rdwavemedia.com/coderpro/bs5/2.0/assets/images/promo-figure-alt.svg'
            alt=''
          />
        </div>
      </div>
    </section>
  );
}

export default App;
