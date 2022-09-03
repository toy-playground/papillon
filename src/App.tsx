import Head from '@/Head';

const App = () => {
  return (
    <div
      className={'flex flex-col w-full p-4 h-full min-h-screen'}
      style={{
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: 'url(/assets/bg.png)',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: '60px',
      }}
    >
      <Head />
      <div className='flex w-full max-w-[1280px] xl:mx-auto px-5 xl:px-0 flex-col lg:flex-row'></div>
    </div>
  );
};

export default App;
