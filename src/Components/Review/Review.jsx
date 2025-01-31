import { useEffect, useState } from "react";
import DetailsReview from "./DetailsReview";


const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    useEffect(()=>
        {
            document.title = "Reviews | Gadget-Heaven"
        },[])

    return (
        <div className="max-w-[1200px] mx-auto">
            <h1 className="text-4xl font-bold text-purple-500 text-center my-10">Reviews From Our Honorable Customers</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 mb-20">
                {
                    reviews.map(review => <DetailsReview key={review.id} review={review}></DetailsReview>)
                }
            </div>
            <h1 className="text-center text-3xl font-bold ">Please Give Your Important Opinions</h1>
            <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl my-10">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Name</label>
                        <input  type="text" className="input w-full" placeholder="Name" />
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input w-full" placeholder="Email" />
                        <label className="fieldset-label">Review</label>
                        <textarea className="h-40 p-2 rounded-lg text-base font-semibold" name="" id=""></textarea>
                        
                        <button className="btn  btn-primary mt-4">Submit</button>
                        
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Review;