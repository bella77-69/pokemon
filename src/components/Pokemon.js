import data from "../data/data";
import { Loop } from "merced-react-hooks";
import OnePokemon from "./OnePokemon";

export default function Pokemon(props) {
  console.log(data);

  //loop component
//   return (
//     <div>
//       <Loop
//         withthis={data}
//         dothat={(poke) => <OnePokemon poke={poke} key={poke.name} />}
//       />
//     </div>
//   );
// }

// Array method map to loop over array [Array.map((item, index) => {})]
    return (
    <div>
    {data.map((poke) => {
        return (
            <section key={poke.name}>
                <h1>{poke.name}</h1>
                <img src={poke.img} alt={poke.name} />
            </section>
        );
    })}
  </div>
);
}
