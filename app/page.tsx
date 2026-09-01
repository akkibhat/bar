import FrontDoor from '@/components/FrontDoor';
import ThemeToggle from '@/components/ThemeToggle';

/**
 * The front door.
 *
 * Deliberately not the contents page - that lives at /book. This page has
 * one job: show that there are two halves and let you pick one. The book
 * is a thing you read; the shelf is a thing you pour from. Landing
 * straight in the contents would make the second half invisible.
 *
 * It renders without the top bar. `Shell` checks for this route and steps
 * out of the way, because a front door wrapped in one half's own
 * navigation is not a front door.
 *
 * The theme switch is the one exception, and it is not a contradiction:
 * it is a preference rather than a destination, and a reader who wants
 * the dark version should not have to enter one of the halves to find
 * the control and come back.
 *
 * No container and no padding here. The halves are full-bleed, floor to
 * ceiling, so anything wrapping them would put a margin around a page
 * whose whole idea is that it has none.
 */
export default function Home() {
  return (
    <div className="relative">
      <ThemeToggle className="absolute top-2 right-2 z-10 no-print" />
      <FrontDoor />
    </div>
  );
}
