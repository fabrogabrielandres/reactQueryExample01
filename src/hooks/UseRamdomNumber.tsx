import { useQuery } from "@tanstack/react-query";


const getRandomNumberFromApi = async (): Promise<number> => {
    const res = await fetch(
      "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
    );
    const data = await res.text();
    return Number(data);
  };
  

export const UseRamdomNumber = () => {
    const query = useQuery({
        queryKey: ["getRandomNumberFromApi"],
        queryFn: getRandomNumberFromApi,
      });
  return (
    query
  )
}
