import Container from "./Container";

export function Header({ title }) {
  return (
    <Container className="py-4 sm:py-16 flex items-center">
      <h1 className="mx-auto text-[#1D1D39] text-2xl sm:text-5xl font-bold whitespace-pre-line text-center">{title}</h1>
    </Container>
  );
}
