import FrontDoor from '@/components/FrontDoor';

/**
 * The front door.
 *
 * Deliberately not the contents page - that lives at /book. This page has
 * one job: show that there are two halves and let you pick one. The book
 * is a thing you read; the shelf is a thing you pour from. Landing
 * straight in the contents would make the second half invisible.
 *
 * It renders without the sidebar. `Shell` checks for this route and steps
 * out of the way, because a front door wrapped in one half's own
 * navigation is not a front door.
 *
 * The masthead and the cards are one client component, since the mark
 * animates in response to which card the pointer is on. It takes no
 * props: the cards deliberately carry no counts, because a front door
 * that reports how many chapters there are is a syllabus rather than an
 * invitation.
 */
export default function Home() {
  return (
    <div className="relative mx-auto max-w-[52rem] px-6 sm:px-10 py-14 lg:py-20">

      <FrontDoor />
    </div>
  );
}
