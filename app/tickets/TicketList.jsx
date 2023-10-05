//export const dynamicParams = false; //returns a 404 page which returns an id of something different compared to the ticket pages that have already been generated
export const dynamicParams = true;
export async function generateStaticParams() {
  const res = await fetch("ttp://localhost:4000/tickets");

  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

import Link from "next/link";
import { notFound } from "next/navigation";

async function getTickets(id) {
  const res = await fetch("http://localhost:4000/tickets/" + id, {
    //This next function will return the revalidated tickets from the server
    next: {
      revalidate: 60, // use 0 to opt out of using cache.
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
          </Link>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center"> There are no open tickets, yay!</p>
      )}
    </>
  );
}
