import user from '../assets/images/user.png';
import double from '../assets/images/double.png';
import group from '../assets/images/group.png';


export const Cards = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
        <div className="mx-auto max-w-[1240px] grid md:grid-cols-3 gap-3 text-black">
          <div className='mx-auto w-full shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105  duration-200'>
            <img src={user} className='w-20 md:w-14 mt-[-3rem] bg-white mx-auto' alt="" />
            <h1 className='text-2xl text-center font-bold'>Single user</h1>
            <p className='text-4xl my-2 text-center font-bold'>100,000Tzs</p>
            <div className='text-center mt-8'>
              <p className='py-2 border-b'>Website design</p>
              <p className='py-2 border-b'>1 User</p>
              <p className='py-2 border-b'>Free resources and templates</p>
              <button className='py-3 px-6 bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6'>Start trial</button>
            </div>
          </div>
          <div className='mx-auto w-full shadow-lg bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105  duration-200'>
            <img src={double} className='w-20 md:w-14 mt-[-3rem] bg-transparent mx-auto' alt="" />
            <h1 className='text-2xl text-center font-bold'>Two user</h1>
            <p className='text-4xl my-2 text-center font-bold'>100,000Tzs</p>
            <div className='text-center mt-8'>
              <p className='py-2 border-b'>Website design</p>
              <p className='py-2 border-b'>1 User</p>
              <p className='py-2 border-b'>Free resources and templates</p>
              <button className='py-3 px-6 text-[#00df9a] bg-black rounded-md font-medium w-[200px] mx-auto my-6'>Start trial</button>
            </div>
          </div>
          <div className='mx-auto w-full shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105  duration-200'>
            <img src={group} className='w-20 md:w-14 mt-[-3rem] bg-white mx-auto' alt="" />
            <h1 className='text-2xl text-center font-bold'>Group user</h1>
            <p className='text-4xl my-2 text-center font-bold'>100,000Tzs</p>
            <div className='text-center mt-8'>
              <p className='py-2 border-b'>Website design</p>
              <p className='py-2 border-b'>1 User</p>
              <p className='py-2 border-b'>Free resources and templates</p>
              <button className='py-3 px-6 bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6'>Start trial</button>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Cards;