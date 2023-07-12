import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        console.log('ciao');
    }, []);

    return <></>;
}

export default DetailPage;