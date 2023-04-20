import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { Pokemon } from "pokenode-ts";



export default function PokemonPage() {
  const router = useRouter();
  const { id } = router.query;


  const fetchPokemon = () => {
    if (id !== undefined) {
      return fetch(`https://pokeapi.co/api/v2/pokemon/${id.toString()}`)
        .then((response) => response.json())
        .then((response) => response as Pokemon);
    }
    return Promise.resolve();
  };

  const query = useQuery<Pokemon | void>({
    queryKey: ["pokemon", id?.toString()],
    queryFn: fetchPokemon,
  });

  console.log("🚀 > PokemonPage > query:", query);

  return (
    <div className="">
      <span> {id} </span>
    </div>
  );
}
