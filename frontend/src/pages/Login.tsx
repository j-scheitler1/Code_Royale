import Header from '@/components/header_layout';
import Login_Layout from '@/components/login_layout';
import { RedirectIfAuth } from '@/pages/auth/RedirectIfAuth';

const Login: React.FC = () => {
  return (
    <>
      <div className='flex items-start p-2 bg-brand min-h-screen'>
        <div className='ml-2'>    
          <Header />
          <RedirectIfAuth>
            <Login_Layout />
          </RedirectIfAuth>
        </div>
      </div>
    </>
  );
};

export default Login;