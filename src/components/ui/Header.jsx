import Container from "./Container";

export function Header({ title }) {
  return (
    <Container className="py-4 sm:py-20 flex items-center">
      <h1 className="mx-auto text-[#1D1D39] text-3xl/tight sm:text-4xl/tight font-bold whitespace-pre-line text-center">
        {title}
      </h1>
    </Container>
  );
}
