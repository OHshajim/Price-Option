import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const  PriceOptions = [
        {
          "id": 1,
          "type": "Basic",
          "price": 9.99,
          "features": [
            "Access to basic features",
            "Email support"
          ]
        },
        {
          "id": 2,
          "type": "Standard",
          "price": 19.99,
          "features": [
            "Access to standard features",
            "Priority email and chat support"
          ]
        },
        {
          "id": 3,
          "type": "Premium",
          "price": 29.99,
          "features": [
            "Access to premium features",
            "24/7 phone and email support",
            "Exclusive content"
          ]
        }
      ]
  
    return (
        <div>
            <h1 className="text-5xl flex justify-center mt-10 mb-5">Best Price in the town </h1>
            {
                PriceOptions.map(option=> <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;