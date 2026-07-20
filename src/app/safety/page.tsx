import { pillarMetadata, PillarHub } from "../components/PillarHub";

export const metadata = pillarMetadata("safety");

export default function SafetyPage() {
  return <PillarHub pillar="safety" />;
}
