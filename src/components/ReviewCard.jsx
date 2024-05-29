import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]" />
        <p className="mt-6 max-w-sm info-text text-center">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img src={star} width={24} height={24} className="object-container m-0" />
            <p className="text-slate-gray font-montserrat text-xl">({rating})</p>
        </div>
        <h3 className="text-center font-palanquin font-bold text-3xl mt-2">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
