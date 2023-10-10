import TicketList from "./TicketList";
import { Suspense } from "react";
import Loading from "../loading";
import Link from "next/link";
import CreateTicket from "./create/page";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
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
