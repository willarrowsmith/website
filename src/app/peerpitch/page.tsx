import ExperienceContent from '@/components/ExperienceContent';
import Sidebar from '@/components/Sidebar';
import { experiences } from '@/experience';

export default function PeerPitchPage() {
  return (
    <>
      <Sidebar />
      <ExperienceContent experience={experiences.peerpitch} />
    </>
  );
}

