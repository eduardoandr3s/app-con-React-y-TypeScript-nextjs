import { RandomFox } from "./components/RandomFox";
export default function Home() {
  return (
    <div >
      <main>
        <h1 className="text-3xl font-bold underline">Hello World</h1>
        <RandomFox />
      </main>
      <footer>
        <p className="text-3xl font-bold underline">Footer</p>
      </footer>
    </div>
  );
}
