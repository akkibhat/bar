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
 * The theme switch is the one exception to that, and it is not a
 * contradiction: it is a preference rather than a destination, and a
 * reader who wants the dark version should not have to enter one of the
 * halves to find the control and then come back. It sits in the corner,
 * out of the centred masthead's way.
 *
 * The masthead and the cards are one client component, since the mark
 * animates in response to which card the pointer is on. It takes no
 * props: the cards deliberately carry no counts, because a front door
 * that reports how many chapters there are is a syllabus rather than an
 * invitation.
 */
export default function Home() {
  return (
    <>
      {/* Fixed to the viewport rather than the content column, so it
          stays put on a page whose whole composition is centred. */}
      <ThemeToggle className="fixed top-3 right-3 z-10 no-print" />

      <div className="relative mx-auto max-w-[52rem] px-6 sm:px-10 py-14 lg:py-20">
        <FrontDoor />
      </div>
    </>
  );
}
