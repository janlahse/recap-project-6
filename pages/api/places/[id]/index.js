import dbConnect from "@/db/connect";
import Place from "@/db/Models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  switch (request.method) {
    case "GET":
      const place = await Place.findById(id);
      response.status(200).json(place);
      if (!place) {
        response.status(404).json({ status: "Not found" });
        return;
      }
      return;
    default:
      response.status(405).json({ status: "Wrong request method" });
      return;
  }
}
