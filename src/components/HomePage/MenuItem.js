const MenuItem = (props) => {
  const { id, name, description, price, image } = props.item;

  return (
    <div key={id}>
    <div className='flex flex-row lg:flex-col h-full'>
      <div
        className="w-[45%] md:w-auto"
      >
        <img src={image} alt={name} />
      </div>
     
      <div className='bg-[#fff3e4] flex-1 flex flex-col justify-center px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max'>
        <div className='text-center'>
          <div className='text-xl font-semibold text-dark xl:text-2xl'>
            {name}
          </div>
          <div className='my-1 text-[20px] lg:text-[40px] lg:my-6 text-bordeux font-semibold'>
            {`$ ${price}`}
          </div>
          <div>{description}</div>
    
        </div>
      </div>
    </div>
  </div>

  );
};

export default MenuItem;
