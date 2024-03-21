import Link from "next/link";

async function getTickets() {
  //Imitate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("http://localhost:4000/tickets", {
    //This next function will return the revalidated tickets from the server
    next: {
      revalidate: 60, // use 0 to opt out of using cache.
    },
  });

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
          {/* <a
            href={`/api/tickets/delete?ticketId=${ticket.id}`}
            onClick={(e) => handleDelete(ticket.id, e)}
          >
            Delete Ticket
          </a> */}
        </div>
      ))}
    </>
  );
}

async function handleDelete(ticketId) {
  event.preventDefault(); // Prevent the link from navigating
  const res = await fetch(`/api/tickets/${ticketId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    // Optionally refresh the page or use client-side logic to remove the item from the DOM
    window.location.reload();
  }
}

// Fetch tickets server-side (for demonstration)
TicketList.getInitialProps = async () => {
  const tickets = await getTickets();
  return { tickets };
};
