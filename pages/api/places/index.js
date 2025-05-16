import dbConnect from "@/db/connect";
import Place from "@/db/Models/Place";

export default async function handler(request, response) {
  await dbConnect();
  switch (request.method) {
    case "GET":
      const places = await Place.find();
      response.status(200).json(places);
      return;

    case "POST":
      //TODO: add error handling
      const placeData = request.body;
      await Place.create(placeData);
      response.status(201).json({ status: "Place created" });
      return;

    default:
      response.status(405).json({ status: "Wrong request method" });
      return;
  }
}
