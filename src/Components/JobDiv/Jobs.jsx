import { BiTimeFive } from 'react-icons/bi'
import download from '../../Assests/download.png'
import img1 from '../../Assests/img1.png'
import img2 from '../../Assests/img2.png'
import img3 from '../../Assests/img3.png'
import img4 from '../../Assests/img4.png'
import img5 from '../../Assests/img5.png'
import img6 from '../../Assests/img6.png'
import img7 from '../../Assests/img7.png'

const Data = [
  {
    id: 1,
    image: download,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime impedit beatae libero atque dolorem temporibus, fugiat ipsum aut nihil iste',
    company: 'Novac Linus Co.'


  },
  {
    id: 2,
    image: img1,
    title: 'UI/UX Designer',
    time: '13Hrs',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime impedit beatae libero atque dolorem temporibus, fugiat ipsum aut nihil iste',
    company: 'Liquid Accessments'


  },
  {
    id: 3,
    image: img2,
    title: 'Software Developer',
    time: '20Hrs',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime impedit beatae libero atque dolorem temporibus, fugiat ipsum aut nihil iste',
    company: 'Web Tech Agency'


  },
  {
    id: 4,
    image: img3,
    title: 'Web Developer',
    time: '21Hrs',
    location: 'Mumbai',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime impedit beatae libero atque dolorem temporibus, fugiat ipsum aut nihil iste',
    company: 'Novac Linus Co.'


  },
  {
    id: 5,
    image: img4,
    title: 'Flutter Developer',
    time: '1day',
    location: 'Pune',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime impedit beatae libero atque dolorem temporibus, fugiat ipsum aut nihil iste',
    company: 'Yumist'


  },
  {
    id: 6,
    image: img5,
    title: 'Mobile Developer',
    time: '1day',
    location: 'Noida',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime impedit beatae libero atque dolorem temporibus, fugiat ipsum aut nihil iste',
    company: 'Monkey Box'
  },
  {
    id: 7,
    image: img6,
    title : 'Data Engineer',
    time: '2day',
    location: 'Gurugram',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime impedit beatae libero atque dolorem temporibus, fugiat ipsum aut nihil iste elit aut nuti!!!',
    company:'Marnus Pvt. Limited'
  },
  {
    id: 8,
    image: img7,
    title : 'Machine Learning Dev',
    time: '3day',
    location: 'Gurugram',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime impedit beatae libero atque dolorem temporibus, fugiat ipsum aut nihil iste',
    company:'Dial-A-Celeb'
  }
]

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

        {
          Data.map(({ id, image, title, time, location, desc, company }) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div
                key={id}
                className="group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                <span className="flex justify-between items-center gap-4">

                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>

                  <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive />{time}
                  </span>

                </span>
                <h6 className='text-[#ccc]'>{location}</h6>

                <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>

                <div className="company flex items-center gap-2">
                  <img src={image} alt='company logo' className='w-[10%]'
                  /><span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>Apply Now</button>

              </div>
            )
          })
        }



      </div>
    </div>
  )
}

export default Jobs