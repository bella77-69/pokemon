export default function OnePokemon(props) {
  const poke = props.poke;

  return (
    <section key={poke.name}>
      <h1>{poke.name}</h1>
      <img src={poke.img} alt={poke.name} />
    </section>
  );
}
