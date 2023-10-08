export const dynamicParams = true; //returns a 404 page which returns an id of something different compared to the ticket pages that have already been generated
//export const dynamicParams = true;
export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");

  const tickets = await res.json();

  //return tickets;
  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

import Link from "next/link";
import { notFound } from "next/navigation";

async function getTicket(id) {
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

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);
  //console.log(ticket);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} Priority
        </div>
      </div>
    </main>
  );
}
