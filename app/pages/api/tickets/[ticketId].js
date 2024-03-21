// pages/api/tickets/[ticketId].js
export default async function handler(req, res) {
  const { ticketId } = req.query;

  if (req.method === "DELETE") {
    try {
      // Perform the delete operation, e.g., call your backend or database
      await fetch(`http://localhost:4000/tickets/${ticketId}`, {
        method: "DELETE",
      });
      res.status(200).json({ message: "Ticket deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting ticket" });
    }
  } else {
    // Handle any non-DELETE requests
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
