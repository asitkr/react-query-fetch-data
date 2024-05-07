import './App.css'
import { useQuery, useQueryClient } from 'react-query';
import { BASE_URL } from './utils';
import axios from 'axios';

function App() {

  // const queryClient = useQueryClient();
  // const { isLoading: loading, error, data: food } = useQuery(
  //   "random-food",
  //   () =>
  //     fetch("https://random-data-api.com/api/food/random_food").then((res) =>
  //       res.json()
  //     )
  // );

  // if (loading) return <p>Data are loading...</p>;
  // if (error) return <p>Error: {error.status}</p>;

  // const refetchData = () => {
  //   queryClient.invalidateQueries("random-food");
  // };


  // 2nd way
  // const { isLoading: loading, error, data: data } = useQuery("products", () => fetch(`${BASE_URL}/products`).then(res => res.json()))

  // if (loading) return <p>Data are loading...</p>;
  // if (error) return <p>Error: {error.status}</p>;


  // 3rd way
  // const { isLoading: loading, error, data: data } = useQuery("products", async () => {
  //   const res = await fetch(`${BASE_URL}/products`);
  //   const data = await res.json();

  //   return data;
  // })

  // if (loading) return <p>Data are loading...</p>;
  // if (error) return <p>Error: {error.status}</p>;


  // 4th way
  const { isLoading: loading, error, data: data } = useQuery("products", async () => {
    const res = await axios.get(`${BASE_URL}/products`);

    return res.data;
  })

  if (loading) return <p>Data are loading...</p>;
  if (error) return <p>Error: {error.status}</p>;


  console.log(data);

  return (
    <>
      <div>
        {/* <h1>
          What will I eat today?
          <span aria-label="tasty-emoji" role="img">
            😋
          </span>
        </h1>
        <h2>{food?.dish}</h2>
        <button onClick={refetchData}>New dish</button> */}
      </div>

    </>
  )
}

export default App
