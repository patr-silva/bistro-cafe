import Modal from "../UI/Modal";

const BookingCompleted = (props) => {
  const didSubmitModalContent = (
    <>
      <div className='flex flex-col p-1 align-middle'>
        <p className='mt-2 text-black'>
          Shortly, you'll receive an email from our team confirming your reservation!
        </p>
        <p className='text-black'>
          See you soon!
        </p>
        <button
          className='btn capitalize w-20 lg:w-22 self-center'
          onClick={props.onHideCart}
        >
          Close
        </button>
      </div>
    </>
  );

  return <Modal onHideCart={props.onHideCart}>{didSubmitModalContent}</Modal>;
};

export default BookingCompleted;

