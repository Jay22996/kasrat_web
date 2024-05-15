import { useParams } from "react-router-dom";
import AboutGym from "../about_gym/about_gym";
import GymHome from "../gym_home/gym_home";
import GymPhotos from "../gym_photo/gym_photo";
import GymRegister from "../gym_register/gym_register";
import GymReview from "../gym_review/gym_review";
import GymService from "../gym_service/gym_service";
import GymTrainer from "../gym_trainer/gym_trainer";
import { useEffect, useState } from "react";
import axios from "axios";

const GymIntro = () => {
    const {id} = useParams();
    var baseurl = "https://node-test-1avh.onrender.com"

    const [data,setdata] = useState("")
    useEffect(() => {
        axios
        .get(`${baseurl}/gym/findgymbyid/${id}`)
        .then(function (response) {
            setdata(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {});
    }, [baseurl]);
    const data1 = data?.data?.data
    return (
        <>
            {data &&<GymHome data={data1} />}
            {data &&<AboutGym data={data1}/>}
            {data &&<GymService data={data1}/>}
            {data &&<GymTrainer data={data1}/>}
            {data &&<GymPhotos data={data1}/>}
            {data &&<GymReview data={data1}/>}
            {data &&<GymRegister data={data1}/>}
        </>
    );
};

export default GymIntro;