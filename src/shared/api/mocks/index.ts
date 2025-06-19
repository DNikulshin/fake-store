export async function enableMocking() {
  if (import.meta.env.PROD) {
    return;
  }

  const { worker } = await import("../mocks/browser");
  return worker.start();
}
