import { useState, useRef } from "react";

import { reservationData } from "../../data";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "../../timepicker.css";

import { FaUsers, FaCalendar, FaClock } from "react-icons/fa";
import { BsFillPersonFill, BsTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../variants";

import BookingCompleted from "./BookingCompleted";

const Booking = () => {
  const { title, subtitle, modelImg, btnText } = reservationData;
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    email: true,
    phone: true,
    date: true,
    time: true,
    people: true,
  });
  const [confirmationShown, setConfirmationShown] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState("10:00");

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const peopleInputRef = useRef();

  const nameValidation = (value) => {
    return value.trim() !== "";
  };

  const emailValidation = (value) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return value.match(validRegex) ? true : false;
  };

  const phoneValidation = (value) => {
    return value.trim().length === 9;
  };

  const peopleValidation = (value) => {
    return value > 0;
  };

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredDate = startDate;
    const enteredTime = value;
    const enteredPeople = peopleInputRef.current.value;

    const enteredNameValidation = nameValidation(enteredName);
    const enteredEmailValidation = emailValidation(enteredEmail);
    const enteredPhoneValidation = phoneValidation(enteredPhone);
    const enteredPeopleValidation = peopleValidation(enteredPeople);

    setFormInputValidity({
      name: enteredNameValidation,
      email: enteredEmailValidation,
      phone: enteredPhoneValidation,
      date: enteredDate,
      time: enteredTime,
      people: enteredPeopleValidation,
    });

    const formIsValid =
      enteredNameValidation &&
      enteredEmailValidation &&
      enteredPhoneValidation &&
      enteredDate &&
      enteredTime &&
      enteredPeopleValidation;

      setFormValid(formIsValid);

    if (!formIsValid) {
      return;
    }
  };

  const showConfirmationHandler = () => {
    setConfirmationShown(true);
  };

  const hideConfirmationHandler = () => {
    setConfirmationShown(false);
  };

  return (
    <>
      <section
        className='relative top-48 z-30 pb-20 lg:py-[100px]'
        id='reservation'
      >
        {formValid && confirmationShown && (
          <BookingCompleted onHideCart={hideConfirmationHandler} />
        )}
        <div className='container mx-auto'>
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView={"show"}
            className='text-center'
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1.6)}
              className='h2 capitalize'
            >
              {title}
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.4, 1.6)}
              className='mb-8 text-dark'
            >
              {subtitle}
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.6, 1.6)}
              className='flex justify-center mb-8'
            >
              <img src={modelImg} alt='' />
            </motion.div>
          </motion.div>

          <motion.form
            variants={fadeIn("up", "tween", 0.7, 1.6)}
            initial='hidden'
            whileInView={"show"}
            onSubmit={confirmHandler}
          >
            <div className='grid lg:grid-cols-3 gap-y-4 sm:grid-cols-none items-center justify-between sm:justify-center mb-8 ml-8'>
              <div>
                <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                  <BsFillPersonFill />
                  <div>Name</div>
                </div>
                <input className='input' type='text' ref={nameInputRef} />
                {!formInputValidity.name && (
                  <p className='text-red-700'>Please enter your name</p>
                )}
              </div>

              <div>
                <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                  <MdAlternateEmail />
                  <div>Email</div>
                </div>
                <input className='input' type='email' ref={emailInputRef} />
                {!formInputValidity.email && (
                  <p className='text-red-700'>Please enter a valid email</p>
                )}
              </div>

              <div>
                <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                  <BsTelephoneFill />
                  <div>Phone No.</div>
                </div>
                <input className='input' type='number' ref={phoneInputRef} />
                {!formInputValidity.phone && (
                  <p className='text-red-700'>
                    Please enter a valid phone number
                  </p>
                )}
              </div>

              <div>
                <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                  <FaCalendar />
                  <div>Choose Date</div>
                </div>
                <DatePicker
                  className='input'
                  selected={startDate}
                  minDate={new Date()}
                  onChange={(date) => setStartDate(date)}
                  required={true}
                />
              </div>

              <div>
                <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                  <FaClock />
                  <div>Choose Time</div>
                </div>
                <TimePicker
                  className='input'
                  clearIcon={false}
                  clockIcon={false}
                  onChange={(time) => setValue(value)}
                  value={value}
                  minTime='09:00:00'
                  maxTime='11:00:00'
                  required={true}
                />
              </div>

              <div>
                <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                  <FaUsers />
                  <div>How many people?</div>
                </div>
                <input
                  className='input'
                  type='text'
                  placeholder='1'
                  ref={peopleInputRef}
                />
                {!formInputValidity.people && (
                  <p className='text-red-700'>Please enter a valid number</p>
                )}
              </div>
            </div>
            <div className='max-w-[316px] mx-auto flex justify-center'>
              <button
                className='btn capitalize w-full lg:w-auto'
                onClick={showConfirmationHandler}
              >
                {btnText}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Booking;
