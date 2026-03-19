import ScrollyCanvas from '@/components/ScrollyCanvas';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen font-sans selection:bg-white/30 selection:text-white">
      <ScrollyCanvas />
      <Timeline />
      <Projects />
    </main>
  );
}
