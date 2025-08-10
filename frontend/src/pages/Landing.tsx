import Header from '@/components/header_layout';
import Design from '@/components/design_layout';

const Landing: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-brand">
        <div className="flex items-center p-2 bg-brand">
          <div className="ml-2">
            <Header />
            <Design />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;