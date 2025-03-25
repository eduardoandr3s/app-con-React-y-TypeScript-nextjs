"use client";
import { MouseEventHandler, useState } from "react";
import { RandomFox } from "./components/RandomFox";

const random = (): number => Math.floor(Math.random() * 123) + 1;


const generateId = () => Math.random().toString(36).substring(2,9);

type ImageItems = {id: string, url: string};

export default function Home() {
  const [images, setImages] = useState<Array<ImageItems>>([])
  
  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {

    event.preventDefault()

      const newImageItem: ImageItems = {
        id: generateId(),
        url: `https://randomfox.ca/images/${random()}.jpg`
      }
      setImages([
        ...images,
        newImageItem
      ])
    }
  return (
    <div >
      <main>
        <h1 className="text-3xl font-bold underline">Hello World</h1>
        <button onClick={addNewFox}>Add New Fox</button>
      {images.map(({id, url})=>(
              <div key={id} className="p-4">

                  <RandomFox image = {url} />

              </div>

      ))}

      </main>
      <footer>
        <p className="text-3xl font-bold underline">Footer</p>
      </footer>
    </div>
  );
}
