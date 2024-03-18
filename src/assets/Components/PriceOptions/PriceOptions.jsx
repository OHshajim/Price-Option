import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      "id": 1,
      "type": "Bronze",
      "price": 29.99,
      "features": [
        "Access to gym facilities",
        "Limited access to classes",
        "Basic equipment usage"
      ]
    },
    {
      "id": 2,
      "type": "Silver",
      "price": 49.99,
      "features": [
        "Access to gym facilities",
        "Access to all classes",
        "Standard equipment usage",
        "Personal training session (1/month)"
      ]
    },
    {
      "id": 3,
      "type": "Gold",
      "price": 79.99,
      "features": [
        "Access to gym facilities",
        "Access to all classes",
        "Premium equipment usage",
        "Personal training session (2/month)",
        "Nutritional guidance"
      ]
    }

  ]

  return (
    <div>
      <h1 className="text-5xl flex justify-center mt-10 mb-5">Best Price in the town </h1>
      <div className='grid  md:grid-cols-3 '>
        {
          priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div>
    </div>
  );
};

export default PriceOptions;