import styled from "styled-components";
import Form from "../components/Form";
import { StyledLink } from "../components/StyledLink";
import { useRouter } from "next/router";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;

export default function CreatePlacePage() {
  const router = useRouter();
  async function addPlace(place) {
    const response = await fetch("/api/places", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(place),
    });
    //TODO add error handling
    if (response.ok) {
      router.push("/");
    }
  }

  return (
    <>
      <h2 id="add-place">Add Place</h2>
      <StyledBackLink href="/">back</StyledBackLink>
      <Form onSubmit={addPlace} formName={"add-place"} />
    </>
  );
}
