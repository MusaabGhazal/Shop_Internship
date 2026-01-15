import DisplayItems from './DisplayItems';

import { items } from '../components/Shop';
export default function TopSelling({ data }){
  
  // add logic here to filter based on top selling
  data.sort((a, b) => b.sellCount - a.sellCount);

  return (
      <DisplayItems items={data}> New Arrivals </DisplayItems>
  );
}