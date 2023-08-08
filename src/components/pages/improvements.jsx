import axios from 'axios';
import { useState } from 'react';

const Improvements = () => {
  const [data, setData] = useState([]);


  //get data from facebook graph api
  useEffect(() => {
    axios.get('https://graph.facebook.com/v11.0/100001843467895/posts?access_token=EAAJZBZCZBZBZB0BAJXZBZBZBZBZBZDZD')
    .then((res) => {
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    })
  })
  return (
    <div>
      <h1>Improvements</h1>
    </div>
  );
}

export default Improvements;