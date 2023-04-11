import { AiFillHeart } from 'react-icons/ai';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { child, get, getDatabase, ref } from 'firebase/database';
import { DiCodeigniter } from 'react-icons/di';

const loginBtn = document.querySelector('.login-button');

const Msg = ({ closeToast, toastProps, userData }) => (
  <p>
    Hi{' '}
    <span className='text-bright-blue-500 font-medium capitalize'>
      {userData ? userData.name : 'bro!'}
    </span>
    <DiCodeigniter className='inline-block pb-2 fill-orange-600 text-lg' />,
    welcome back!
  </p>
);

function LandingPage() {
  const auth = getAuth();
  const dbRef = ref(getDatabase());
  const getUserFromDb = async () => {
    try {
      const response = await get(child(dbRef, 'users'));
      if (response.exists()) {
        const userData = response.val();
        return userData;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        // loginBtn.classList.add('hidden');
        console.log('user:', user);

        const uid = user.uid;
        const userDataList = await getUserFromDb();
        const userIdList = Object.keys(userDataList);
        const userId = userIdList.filter((userId) => userId === uid);
        const userData = userDataList[userId];
        toast(<Msg userData={userData} />);
      } else {
        console.log('user signed out!');
      }
    });
  }, []);

  return (
    <main className='pt-12 w-full  '>
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
            <div className='mt-5 '>
              <Button
                type='button'
                btnType='btn-primary'
                linkTo='/plugins'
                children='Download plugins'
                iconName='link'
              />
              <Button
                type='button'
                btnType='btn-secondary'
                linkTo=''
                children='How to install?'
                iconName='link'
              />
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
          <div className='flex w-full gap-5 pb-24'>
            <Card
              iconName='block'
              header='diverse'
              content={`Our target is offering a wide range of applications to suit your every need. But we have just started so more plugins are coming soon!`}
            />
            <Card
              iconName='fast'
              header='lightning fast'
              content={`We understand that time is of the essence. So plugins will help us to work faster`}
            />
            <Card
              iconName='update'
              header='update'
              content={`We constantly updates our plugins store with new and improved versions of existing plugins to meet your needs.`}
            />
            <Card
              iconName='docs'
              header='fully documented'
              content={`We ensure that all of the apps in our store are fully documented, so you can easily find the information you need to get the most out of plugins`}
            />
          </div>
        </div>
      </section>
      <ToastContainer autoClose='1500' />
    </main>
  );
}

export default LandingPage;
