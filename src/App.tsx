import Body from '@/body';
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
      <Body />
    </div>
  );
};

export default App;
