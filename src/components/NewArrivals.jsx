import DisplayItems from './DisplayItems';

export default function NewArrivals({data}){
  
  return (
    <>
      <DisplayItems items={data}> New Arrivals </DisplayItems>
      <div className="new-arrivals-line"></div>
    </>
  );
}