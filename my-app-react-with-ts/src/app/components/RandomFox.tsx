//generate a random function to get a random number between 1 and 123
const random = () => Math.floor(Math.random() * 123) + 1;

export const RandomFox = ():JSX.Element => {

    const image = `https://randomfox.ca/images/${random()}.jpg`;

    return <img width={320} height={180} src={image} alt="Random Fox" className="rounded-md"/>
};


