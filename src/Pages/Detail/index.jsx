import { useParams } from 'react-router-dom';

export default function Detail () {
    const { id } = useParams();
    return <h1>Detail {id}</h1>
}