import Header from './Header.jsx';
import List from '../pages/List.jsx';
import RolledCard from './RolledCard.jsx';
import { SignIn } from '@/pages/SignIn.jsx';
import { EditProfile } from '@/pages/EditProfile.jsx';
import { SignUp } from '@/pages/SignUp.jsx';
export default function App() {
  return (
    <>
      <Header />
      <main>
          {/*<List />*/}
          {/*<RolledCard />*/}
          {/*<SignUp />*/}
          {/*<SignIn />*/}
          <EditProfile />
      </main>
    </>
  );
}
