import "../styles/Sign.less"
import "../Copmonents/ImputsList.jsx"
import {Button} from '@gravity-ui/uikit';
import ImputsList from '@/Copmonents/ImputsList.jsx';

export function EditProfile() {

  return (
    <article className="edit-profile">
      <h1>Edit Profile</h1>
      <ImputsList user={"edit"} />
      <Button className="create-button" view="flat" size="xl">Save</Button>
    </article>
  );
}