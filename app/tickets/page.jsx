import TicketList from "./TicketList";
import { Suspense } from "react";
import Loading from "../loading";
import Link from "next/link";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Tickets that are currently open.</small>
          </p>
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>

      <div className="flex justify-center my-8">
        <Link href="../tickets/create">
          <button className="btn-primary">Create a new ticket</button>
        </Link>
      </div>
    </main>
  );
}
