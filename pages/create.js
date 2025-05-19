import styled from "styled-components";
import Form from "../components/Form";
import { StyledLink } from "../components/StyledLink";
import { useRouter } from "next/router";
import { useState } from "react";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;

export default function CreatePlacePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function addPlace(place) {
    setIsLoading(true);
    const startTime = Date.now();
    const minDisplayTime = 2000;

    try {
      const response = await fetch("/api/places", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(place),
      });

      if (response.ok) {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, remainingTime));

        router.push("/");
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error adding place:", error);
      setIsLoading(false);
    }
  }

  return (
    <>
      <h2 id="add-place">Add Place</h2>
      <StyledBackLink href="/">back</StyledBackLink>

      <Form onSubmit={addPlace} formName={"add-place"} isLoading={isLoading} />
    </>
  );
}
