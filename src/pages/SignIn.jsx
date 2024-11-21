import "../styles/Sign.less"
import "../Copmonents/ImputsList.jsx"
import {Button} from '@gravity-ui/uikit';
import ImputsList from '@/Copmonents/ImputsList.jsx';

export function SignIn() {

  return (
    <article className="sign-in">
      <h1>Sign In</h1>
      <ImputsList user={"login"} />
      <Button className="create-button" view="flat" size="xl">Login</Button>
    </article>
  );
}