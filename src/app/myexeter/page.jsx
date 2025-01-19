import Sidebar from '../../components/Sidebar'
import ExperienceContent from '../../components/ExperienceContent'
import {experiences} from "../../experience"
export default function MyExeterPage() {
  return (<>
    <Sidebar />
    <ExperienceContent experience={experiences.myexeter}/>
  </>);
}

