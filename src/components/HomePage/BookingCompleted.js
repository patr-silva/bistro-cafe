import Modal from "../UI/Modal";

const BookingCompleted = (props) => {
  const didSubmitModalContent = (
    <>
      <div className='flex flex-col p-1 align-middle'>
        <p className='mb-6'>
          Your reservation has been successfully completed!
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

