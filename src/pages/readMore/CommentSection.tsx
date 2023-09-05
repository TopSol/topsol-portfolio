import React,{useState} from 'react'
import PrimaryBtn from '../../components/PrimaryBtn'
import commentImage from '../../images/commentImage.png'
import commentCircle from '../../images/rating1.png'
import hoverCircle from '../../images/ratingHover.png'

export default function CommentSection() {
    const [isHovered, setIsHovered] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  
    // Event handlers for input fields
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);

    };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value)
    };
  
    // Function to check if all fields are filled
    const isDisabled = !(name.trim() && email.trim() && message.trim());

  return (
    <div>
         <div className=' mt-[96px]  bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo pb-[86px]'>
        <div className='md:w-[70%] md:justify-center md:mx-auto'>
          <div className=' flex justify-center  '>
            <h1 className='text-[22px] md:text-[45px] text-white  font-[700px] mt-[36px] justify-center text-center'>Leave comment here</h1>
          </div>
          <div className=' flex justify-center mt-[31px] '>
            <img src={commentImage}
              className="w-[258px] h-[204px] align-center"
              alt=""
            />
          </div>
          <div className='mt-[49px]  md:container md:mx-auto  flex flex-col md:flex-row  justify-center items-center '>

            <div className="mb-[24px] md:mr-[21px] w-[85%]  md:container md:mx-auto justify-center">
            <input
            type="text"
            className="px-[10px] py-[17px] outline-none rounded-md w-[100%]  bg-light_Grey_bg"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
            </div>
            <div className="mb-[24px] w-[85%]  md:container md:mx-auto justify-center ">
              <input
                type="text"
                className="px-[10px] py-[17px] outline-none rounded-md w-[100%] bg-light_Grey_bg "
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="w-[100%] md:container md:mx-auto flex flex-col justify-center items-center  ">
          <div
      className="w-[85%] md:w-[100%] relative"  >
      <div className=" rounded-2xl relative">
        <div className="absolute top-0 right-0">
          <img
            src={isHovered ? hoverCircle : commentCircle}
            className="w-[75px] h-[75px] hover:rotate"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            alt="Image"
          />
        </div>
        <textarea
          className="outline-none px-[30px] py-[17px] h-[164px] md:h-[275px] bg-light_Grey_bg rounded-md w-[100%]"
          placeholder="Message"
          value={message}
                onChange={handleMessageChange}
        ></textarea>
      </div>
    </div>
            <div className="w-[85%] mt-[22px] md:mt-[42px] md:container md:mx-auto flex flex-col justify-center items-center md:items-end ">
            <PrimaryBtn
          text="Done"
          additionalClasses={`w-[100%] md:w-[198px] border rounded-md bg-white font-semibold hover:bg-primary text-primary ${
            isDisabled ? 'disabled' : ''
          }`}
          disabled={isDisabled}
          onClick={() => {
            if (!isDisabled) {
              // Handle button click logic here
            }
          }}
        />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
