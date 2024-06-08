import laptop from '../assets/images/laptop.jpg'

export const Works = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src={laptop} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Work with power</p>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-1'>Our user interface</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, nemo harum. Rerum, voluptatum ab architecto debitis aperiam accusamus illum accusantium dicta corrupti placeat nobis culpa magni </p>
                <button className='bg-[#000]  text-white rounded-md font-bold py-2 w-[200px] my-4'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Works;
